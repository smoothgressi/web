// Client-side Regression Engine
class RegressionEngine {
    constructor() {}

    // Linear Regression: y = mx + b
    linearRegression(x, y) {
        if (x.length !== y.length || x.length < 2) {
            throw new Error('Need at least 2 points with matching x and y arrays');
        }

        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

        // Calculate slope and intercept
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        // Calculate predicted values
        const predictedY = x.map(xi => slope * xi + intercept);

        // Calculate residuals
        const residuals = y.map((yi, i) => yi - predictedY[i]);

        // Calculate R-squared
        const yMean = sumY / n;
        const ssTotal = y.reduce((sum, yi) => sum + Math.pow(yi - yMean, 2), 0);
        const ssResidual = residuals.reduce((sum, r) => sum + r * r, 0);
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            slope: slope,
            intercept: intercept,
            r_squared: rSquared,
            predicted_y: predictedY,
            residuals: residuals,
            equation: `y = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`
        };
    }

    // Polynomial Regression
    polynomialRegression(x, y, degree) {
        if (x.length !== y.length || x.length < degree + 1) {
            throw new Error(`Need at least ${degree + 1} points for degree ${degree}`);
        }

        // Build Vandermonde matrix
        const n = x.length;
        const matrix = [];
        for (let i = 0; i < n; i++) {
            const row = [];
            for (let j = 0; j <= degree; j++) {
                row.push(Math.pow(x[i], j));
            }
            matrix.push(row);
        }

        // Solve using normal equations: (X^T X) * coeffs = X^T y
        const xt = this.transpose(matrix);
        const xtx = this.matrixMultiply(xt, matrix);
        const xty = this.matrixVectorMultiply(xt, y);
        const coeffs = this.gaussianElimination(xtx, xty);

        // Calculate predicted values
        const predictedY = x.map(xi => {
            let sum = 0;
            for (let j = 0; j <= degree; j++) {
                sum += coeffs[j] * Math.pow(xi, j);
            }
            return sum;
        });

        // Calculate residuals and R-squared
        const residuals = y.map((yi, i) => yi - predictedY[i]);
        const yMean = y.reduce((a, b) => a + b, 0) / n;
        const ssTotal = y.reduce((sum, yi) => sum + Math.pow(yi - yMean, 2), 0);
        const ssResidual = residuals.reduce((sum, r) => sum + r * r, 0);
        const rSquared = 1 - (ssResidual / ssTotal);

        // Build equation string
        let equation = 'y = ';
        for (let i = degree; i >= 0; i--) {
            const coef = coeffs[i];
            if (Math.abs(coef) < 1e-10) continue;
            
            if (i !== degree && coef >= 0) equation += ' + ';
            if (coef < 0) equation += ' - ';
            
            equation += Math.abs(coef).toFixed(4);
            if (i > 0) equation += 'x';
            if (i > 1) equation += '^' + i;
        }

        return {
            coefficients: coeffs.reverse(), // Return in descending order
            degree: degree,
            r_squared: rSquared,
            predicted_y: predictedY,
            residuals: residuals,
            equation: equation
        };
    }

    // Exponential Regression: y = a * e^(bx)
    exponentialRegression(x, y) {
        if (x.length !== y.length || x.length < 2) {
            throw new Error('Need at least 2 points');
        }

        // Filter positive y values
        const filtered = x.map((xi, i) => ({ x: xi, y: y[i] }))
            .filter(point => point.y > 0);

        if (filtered.length < 2) {
            throw new Error('Need at least 2 points with positive y values');
        }

        const xFiltered = filtered.map(p => p.x);
        const yFiltered = filtered.map(p => p.y);
        const logY = yFiltered.map(yi => Math.log(yi));

        // Linear regression on log-transformed data
        const linearResult = this.linearRegression(xFiltered, logY);
        
        const b = linearResult.slope;
        const a = Math.exp(linearResult.intercept);

        // Calculate predicted values on original scale
        const predictedY = x.map(xi => a * Math.exp(b * xi));

        // Calculate residuals and R-squared on original scale
        const residuals = y.map((yi, i) => yi - predictedY[i]);
        const yMean = y.reduce((sum, yi) => sum + yi, 0) / y.length;
        const ssTotal = y.reduce((sum, yi) => sum + Math.pow(yi - yMean, 2), 0);
        const ssResidual = residuals.reduce((sum, r) => sum + r * r, 0);
        const rSquared = 1 - (ssResidual / ssTotal);

        return {
            a: a,
            b: b,
            r_squared: rSquared,
            predicted_y: predictedY,
            residuals: residuals,
            equation: `y = ${a.toFixed(4)} * e^(${b.toFixed(4)}x)`
        };
    }

    // Matrix operations
    transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    matrixMultiply(a, b) {
        const result = [];
        for (let i = 0; i < a.length; i++) {
            result[i] = [];
            for (let j = 0; j < b[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < a[0].length; k++) {
                    sum += a[i][k] * b[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    matrixVectorMultiply(matrix, vector) {
        return matrix.map(row => 
            row.reduce((sum, val, i) => sum + val * vector[i], 0)
        );
    }

    gaussianElimination(A, b) {
        const n = A.length;
        const augmented = A.map((row, i) => [...row, b[i]]);

        // Forward elimination
        for (let i = 0; i < n; i++) {
            // Find pivot
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(augmented[k][i]) > Math.abs(augmented[maxRow][i])) {
                    maxRow = k;
                }
            }
            [augmented[i], augmented[maxRow]] = [augmented[maxRow], augmented[i]];

            // Make all rows below this one 0 in current column
            for (let k = i + 1; k < n; k++) {
                const factor = augmented[k][i] / augmented[i][i];
                for (let j = i; j <= n; j++) {
                    augmented[k][j] -= factor * augmented[i][j];
                }
            }
        }

        // Back substitution
        const x = new Array(n);
        for (let i = n - 1; i >= 0; i--) {
            x[i] = augmented[i][n];
            for (let j = i + 1; j < n; j++) {
                x[i] -= augmented[i][j] * x[j];
            }
            x[i] /= augmented[i][i];
        }

        return x;
    }

    // Data transformation methods
    normalize(data) {
        const xMin = Math.min(...data.x);
        const xMax = Math.max(...data.x);
        const yMin = Math.min(...data.y);
        const yMax = Math.max(...data.y);

        const xNorm = data.x.map(xi => (xMax - xMin) !== 0 ? (xi - xMin) / (xMax - xMin) : xi);
        const yNorm = data.y.map(yi => (yMax - yMin) !== 0 ? (yi - yMin) / (yMax - yMin) : yi);

        return { x: xNorm, y: yNorm };
    }

    center(data) {
        const xMean = data.x.reduce((a, b) => a + b, 0) / data.x.length;
        const yMean = data.y.reduce((a, b) => a + b, 0) / data.y.length;

        return {
            x: data.x.map(xi => xi - xMean),
            y: data.y.map(yi => yi - yMean)
        };
    }

    sortByX(data) {
        const combined = data.x.map((xi, i) => ({ x: xi, y: data.y[i] }));
        combined.sort((a, b) => a.x - b.x);
        return {
            x: combined.map(p => p.x),
            y: combined.map(p => p.y)
        };
    }

    removeDuplicates(data) {
        const seen = new Set();
        const unique = data.x.map((xi, i) => ({ x: xi, y: data.y[i] }))
            .filter(point => {
                const key = `${point.x},${point.y}`;
                if (seen.has(key)) return false;
                seen.add(key);
                return true;
            });

        return {
            x: unique.map(p => p.x),
            y: unique.map(p => p.y)
        };
    }

    detectOutliers(data, threshold = 3.0) {
        const yMean = data.y.reduce((a, b) => a + b, 0) / data.y.length;
        const yStd = Math.sqrt(
            data.y.reduce((sum, yi) => sum + Math.pow(yi - yMean, 2), 0) / data.y.length
        );

        if (yStd === 0) return [];

        return data.y.map((yi, i) => {
            const zScore = Math.abs((yi - yMean) / yStd);
            return zScore > threshold ? i : -1;
        }).filter(i => i !== -1);
    }
}

// Create global instance
const regressionEngine = new RegressionEngine();
// Main Application Class
class SmoothgressiApp {
    constructor() {
        this.data = { x: [], y: [] };
        this.currentRegression = null;
        this.showGrid = true;
        this.showLegend = true;
        this.theme = 'light';
        this.init();
    }

    init() {
        // Show splash screen, then main app
        setTimeout(() => {
            document.getElementById('loadingSection').style.display = 'none';
            document.getElementById('actionButtons').style.display = 'flex';
        }, 1500);

        this.setupSplashButtons();
        this.setupEventListeners();
        this.loadSettings();
    }

    setupSplashButtons() {
        document.getElementById('btn-splash-open').addEventListener('click', () => {
            this.hideSplash();
            setTimeout(() => this.openFile(), 100);
        });

        document.getElementById('btn-splash-new').addEventListener('click', () => {
            this.hideSplash();
        });

        document.getElementById('btn-splash-continue').addEventListener('click', () => {
            this.hideSplash();
        });
    }

    hideSplash() {
        const splash = document.getElementById('splashScreen');
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('app').style.display = 'flex';
            this.updatePlot();
        }, 500);
    }

    loadSettings() {
        const savedTheme = localStorage.getItem('smoothgressi_theme');
        if (savedTheme) {
            this.theme = savedTheme;
            this.applyTheme(savedTheme);
        }

        const savedGrid = localStorage.getItem('smoothgressi_grid');
        if (savedGrid !== null) {
            this.showGrid = savedGrid === 'true';
            if (!this.showGrid) {
                document.getElementById('btn-toggle-grid').classList.remove('active');
            }
        }

        const savedLegend = localStorage.getItem('smoothgressi_legend');
        if (savedLegend !== null) {
            this.showLegend = savedLegend === 'true';
            if (!this.showLegend) {
                document.getElementById('btn-toggle-legend').classList.remove('active');
            }
        }
    }

    setupEventListeners() {
        // Ribbon tabs
        document.querySelectorAll('.ribbon-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab));
        });

        // File operations
        document.getElementById('btn-open').addEventListener('click', () => this.openFile());
        document.getElementById('btn-save-sgxy').addEventListener('click', () => this.saveFile('sgxy'));
        document.getElementById('btn-save-rgx').addEventListener('click', () => this.saveFile('rgx'));
        document.getElementById('btn-new').addEventListener('click', () => this.newProject());
        document.getElementById('btn-clear').addEventListener('click', () => this.clearData());

        // Clipboard operations
        document.getElementById('btn-copy').addEventListener('click', () => this.copyData());
        document.getElementById('btn-paste').addEventListener('click', () => this.pasteData());

        // Insert operations
        document.getElementById('btn-add-point').addEventListener('click', () => this.addPoint());
        document.getElementById('btn-bulk-add').addEventListener('click', () => this.showBulkAdd());
        document.getElementById('btn-load-sample').addEventListener('click', () => this.loadSampleData());

        // Data operations
        document.getElementById('btn-normalize').addEventListener('click', () => this.normalizeData());
        document.getElementById('btn-center').addEventListener('click', () => this.centerData());
        document.getElementById('btn-sort').addEventListener('click', () => this.sortData());
        document.getElementById('btn-remove-duplicates').addEventListener('click', () => this.removeDuplicates());
        document.getElementById('btn-detect-outliers').addEventListener('click', () => this.detectOutliers());

        // Regression operations
        document.getElementById('btn-linear').addEventListener('click', () => this.runLinearRegression());
        document.getElementById('btn-polynomial').addEventListener('click', () => this.showPolynomialModal());
        document.getElementById('btn-exponential').addEventListener('click', () => this.runExponentialRegression());
        document.getElementById('btn-export-results').addEventListener('click', () => this.exportResults());

        // View operations
        document.getElementById('btn-toggle-grid').addEventListener('click', () => this.toggleGrid());
        document.getElementById('btn-toggle-legend').addEventListener('click', () => this.toggleLegend());
        document.getElementById('btn-zoom-reset').addEventListener('click', () => this.resetZoom());

        // Theme operations
        document.getElementById('btn-theme-light').addEventListener('click', () => this.setTheme('light'));
        document.getElementById('btn-theme-dark').addEventListener('click', () => this.setTheme('dark'));
        document.getElementById('btn-about').addEventListener('click', () => this.showAbout());

        // Modal operations
        document.getElementById('poly-confirm').addEventListener('click', () => this.runPolynomialRegression());
        document.getElementById('poly-cancel').addEventListener('click', () => this.hideModal('polynomialModal'));
        document.getElementById('bulk-add-confirm').addEventListener('click', () => this.bulkAddPoints());
        document.getElementById('bulk-add-cancel').addEventListener('click', () => this.hideModal('bulkAddModal'));

        // File input
        document.getElementById('fileInput').addEventListener('change', (e) => this.handleFileSelect(e));
    }

    switchTab(tab) {
        document.querySelectorAll('.ribbon-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.dataset.tab;
        document.querySelectorAll('.ribbon-panel').forEach(p => p.classList.remove('active'));
        document.querySelector(`.ribbon-panel[data-panel="${tabName}"]`).classList.add('active');
    }

    // File Operations
    openFile() {
        document.getElementById('fileInput').click();
    }

    handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                if (file.name.endsWith('.rgx') || file.name.endsWith('.txt')) {
                    this.importRGX(content);
                } else if (file.name.endsWith('.sgxy') || file.name.endsWith('.json')) {
                    this.importSGXY(content);
                }
                this.setStatus(`Loaded ${this.data.x.length} points from ${file.name}`);
            } catch (error) {
                this.showError('Error loading file: ' + error.message);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Reset input
    }

    importRGX(content) {
        const lines = content.split('\n');
        const x = [], y = [];

        lines.forEach(line => {
            line = line.trim();
            if (!line || line.startsWith('#')) return;

            const parts = line.split(/[;,\t ]+/);
            if (parts.length >= 2) {
                const xVal = parseFloat(parts[0]);
                const yVal = parseFloat(parts[1]);
                if (!isNaN(xVal) && !isNaN(yVal)) {
                    x.push(xVal);
                    y.push(yVal);
                }
            }
        });

        this.data = { x, y };
        this.updateDataTable();
        this.updatePlot();
    }

    importSGXY(content) {
        const data = JSON.parse(content);
        if (!data.points || !Array.isArray(data.points)) {
            throw new Error('Invalid SGXY format');
        }

        const x = [], y = [];
        data.points.forEach(point => {
            if (Array.isArray(point) && point.length >= 2) {
                x.push(parseFloat(point[0]));
                y.push(parseFloat(point[1]));
            }
        });

        this.data = { x, y };
        this.updateDataTable();
        this.updatePlot();
    }

    saveFile(format) {
        if (this.data.x.length === 0) {
            this.showError('No data to save');
            return;
        }

        let content, filename, mimeType;

        if (format === 'rgx') {
            content = this.exportRGX();
            filename = 'data.rgx';
            mimeType = 'text/plain';
        } else {
            content = this.exportSGXY();
            filename = 'data.sgxy';
            mimeType = 'application/json';
        }

        this.downloadFile(content, filename, mimeType);
        this.setStatus('File saved successfully');
    }

    exportRGX() {
        let content = '# Smoothgressi Data Export\n';
        content += `# Date: ${new Date().toISOString()}\n`;
        content += '# Format: x;y\n';
        content += `# Points: ${this.data.x.length}\n#\n`;
        
        for (let i = 0; i < this.data.x.length; i++) {
            content += `${this.data.x[i]};${this.data.y[i]}\n`;
        }
        
        return content;
    }

    exportSGXY() {
        const points = this.data.x.map((x, i) => [x, this.data.y[i]]);
        const data = {
            points: points,
            metadata: {
                application: 'Smoothgressi',
                version: '2.0.0',
                created: new Date().toISOString(),
                point_count: points.length
            }
        };
        return JSON.stringify(data, null, 2);
    }

    downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    newProject() {
        if (this.data.x.length > 0) {
            if (!confirm('Clear all current data?')) return;
        }
        this.clearData();
    }

    clearData() {
        this.data = { x: [], y: [] };
        this.currentRegression = null;
        this.updateDataTable();
        this.updatePlot();
        this.clearResults();
        this.setStatus('Data cleared');
    }

    copyData() {
        if (this.data.x.length === 0) {
            this.showError('No data to copy');
            return;
        }

        const text = this.data.x.map((x, i) => `${x}\t${this.data.y[i]}`).join('\n');
        navigator.clipboard.writeText(text).then(() => {
            this.setStatus('Data copied to clipboard');
        });
    }

    async pasteData() {
        try {
            const text = await navigator.clipboard.readText();
            const lines = text.trim().split('\n');
            const x = [], y = [];

            lines.forEach(line => {
                const parts = line.split(/[\t,; ]+/);
                if (parts.length >= 2) {
                    const xVal = parseFloat(parts[0]);
                    const yVal = parseFloat(parts[1]);
                    if (!isNaN(xVal) && !isNaN(yVal)) {
                        x.push(xVal);
                        y.push(yVal);
                    }
                }
            });

            if (x.length > 0) {
                this.data = { x, y };
                this.updateDataTable();
                this.updatePlot();
                this.setStatus(`Pasted ${x.length} points`);
            }
        } catch (error) {
            this.showError('Failed to paste data');
        }
    }

    addPoint() {
        const x = prompt('Enter X value:');
        const y = prompt('Enter Y value:');

        if (x === null || y === null) return;

        const xVal = parseFloat(x);
        const yVal = parseFloat(y);

        if (isNaN(xVal) || isNaN(yVal)) {
            this.showError('Invalid values');
            return;
        }

        this.data.x.push(xVal);
        this.data.y.push(yVal);
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Point added');
    }

    showBulkAdd() {
        document.getElementById('bulkAddModal').classList.add('show');
        document.getElementById('bulk-data-input').value = '';
        document.getElementById('bulk-data-input').focus();
    }

    bulkAddPoints() {
        const text = document.getElementById('bulk-data-input').value;
        const lines = text.trim().split('\n');
        let added = 0;

        lines.forEach(line => {
            const parts = line.split(/[,;\t ]+/);
            if (parts.length >= 2) {
                const xVal = parseFloat(parts[0]);
                const yVal = parseFloat(parts[1]);
                if (!isNaN(xVal) && !isNaN(yVal)) {
                    this.data.x.push(xVal);
                    this.data.y.push(yVal);
                    added++;
                }
            }
        });

        this.hideModal('bulkAddModal');
        this.updateDataTable();
        this.updatePlot();
        this.setStatus(`Added ${added} points`);
    }

    loadSampleData() {
        // Linear sample data
        this.data = {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [2.1, 4.0, 5.9, 8.1, 9.9, 12.0, 14.1, 15.9, 18.0, 20.1]
        };
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Sample data loaded');
    }

    // Data operations
    normalizeData() {
        if (this.data.x.length === 0) {
            this.showError('No data to normalize');
            return;
        }
        this.data = regressionEngine.normalize(this.data);
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Data normalized');
    }

    centerData() {
        if (this.data.x.length === 0) {
            this.showError('No data to center');
            return;
        }
        this.data = regressionEngine.center(this.data);
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Data centered');
    }

    sortData() {
        if (this.data.x.length === 0) {
            this.showError('No data to sort');
            return;
        }
        this.data = regressionEngine.sortByX(this.data);
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Data sorted by X');
    }

    removeDuplicates() {
        if (this.data.x.length === 0) {
            this.showError('No data');
            return;
        }
        const originalCount = this.data.x.length;
        this.data = regressionEngine.removeDuplicates(this.data);
        const removed = originalCount - this.data.x.length;
        this.updateDataTable();
        this.updatePlot();
        this.setStatus(`Removed ${removed} duplicate(s)`);
    }

    detectOutliers() {
        if (this.data.x.length === 0) {
            this.showError('No data');
            return;
        }
        const outliers = regressionEngine.detectOutliers(this.data, 3.0);
        if (outliers.length === 0) {
            this.setStatus('No outliers detected');
        } else {
            this.setStatus(`Found ${outliers.length} outlier(s) at indices: ${outliers.join(', ')}`);
        }
    }

    // Regression operations
    runLinearRegression() {
        if (this.data.x.length < 2) {
            this.showError('Need at least 2 points');
            return;
        }

        try {
            this.currentRegression = {
                type: 'linear',
                ...regressionEngine.linearRegression(this.data.x, this.data.y)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus('Linear regression complete');
        } catch (error) {
            this.showError(error.message);
        }
    }

    showPolynomialModal() {
        document.getElementById('polynomialModal').classList.add('show');
        document.getElementById('poly-degree').value = 2;
    }

    runPolynomialRegression() {
        const degree = parseInt(document.getElementById('poly-degree').value);
        
        if (degree < 1 || degree > 10) {
            this.showError('Degree must be between 1 and 10');
            return;
        }

        if (this.data.x.length < degree + 1) {
            this.showError(`Need at least ${degree + 1} points for degree ${degree}`);
            return;
        }

        try {
            this.hideModal('polynomialModal');
            this.currentRegression = {
                type: 'polynomial',
                ...regressionEngine.polynomialRegression(this.data.x, this.data.y, degree)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus(`Polynomial regression (degree ${degree}) complete`);
        } catch (error) {
            this.showError(error.message);
        }
    }

    runExponentialRegression() {
        if (this.data.x.length < 2) {
            this.showError('Need at least 2 points');
            return;
        }

        try {
            this.currentRegression = {
                type: 'exponential',
                ...regressionEngine.exponentialRegression(this.data.x, this.data.y)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus('Exponential regression complete');
        } catch (error) {
            this.showError(error.message);
        }
    }

    exportResults() {
        if (!this.currentRegression) {
            this.showError('No regression results to export');
            return;
        }

        const resultsText = document.getElementById('resultsContent').innerText;
        this.downloadFile(resultsText, 'regression_results.txt', 'text/plain');
        this.setStatus('Results exported');
    }

    // Display operations
    updatePlot() {
        const traces = [];

        if (this.data.x.length > 0) {
            traces.push({
                x: this.data.x,
                y: this.data.y,
                mode: 'markers',
                type: 'scatter',
                name: 'Data Points',
                marker: { size: 8, color: '#2563eb' }
            });
        }

        if (this.currentRegression && this.currentRegression.predicted_y) {
            // Sort for smooth line
            const combined = this.data.x.map((x, i) => ({
                x: x,
                y: this.currentRegression.predicted_y[i]
            }));
            combined.sort((a, b) => a.x - b.x);

            traces.push({
                x: combined.map(p => p.x),
                y: combined.map(p => p.y),
                mode: 'lines',
                type: 'scatter',
                name: 'Regression',
                line: { color: '#ef4444', width: 2 }
            });
        }

        const layout = {
            title: 'Data Visualization',
            xaxis: {
                title: 'X',
                showgrid: this.showGrid,
                zeroline: true
            },
            yaxis: {
                title: 'Y',
                showgrid: this.showGrid,
                zeroline: true
            },
            showlegend: this.showLegend,
            paper_bgcolor: this.theme === 'dark' ? '#2d2d2d' : '#ffffff',
            plot_bgcolor: this.theme === 'dark' ? '#1e1e1e' : '#f5f6fa',
            font: {
                color: this.theme === 'dark' ? '#e5e7eb' : '#1f2937'
            },
            margin: { t: 50, b: 50, l: 50, r: 50 }
        };

        const config = {
            responsive: true,
            displayModeBar: true,
            displaylogo: false
        };

        Plotly.newPlot('plotArea', traces, layout, config);
    }

    updateDataTable() {
        const tbody = document.getElementById('dataTableBody');
        tbody.innerHTML = '';

        if (this.data.x.length === 0) {
            tbody.innerHTML = '<tr class="empty-state"><td colspan="4">No data loaded</td></tr>';
            document.getElementById('point-count').textContent = '0 points';
            return;
        }

        this.data.x.forEach((x, i) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${i + 1}</td>
                <td>${x.toFixed(4)}</td>
                <td>${this.data.y[i].toFixed(4)}</td>
                <td>
                    <button class="action-btn delete" onclick="app.deletePoint(${i})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });

        document.getElementById('point-count').textContent = `${this.data.x.length} points`;
    }

    deletePoint(index) {
        this.data.x.splice(index, 1);
        this.data.y.splice(index, 1);
        this.updateDataTable();
        this.updatePlot();
        this.setStatus('Point deleted');
    }

    displayResults() {
        const resultsDiv = document.getElementById('resultsContent');
        
        if (!this.currentRegression) {
            resultsDiv.innerHTML = '<div class="empty-state">Run a regression analysis to see results</div>';
            return;
        }

        let html = '<div class="result-section">';
        html += `<h4>${this.currentRegression.type.toUpperCase()} Regression</h4>`;

        if (this.currentRegression.equation) {
            html += `<div class="equation-display">${this.currentRegression.equation}</div>`;
        }

        html += '<div class="result-item">';
        html += '<span class="result-label">R² (Coefficient of Determination):</span>';
        html += `<span class="result-value">${this.currentRegression.r_squared.toFixed(6)}</span>`;
        html += '</div>';

        if (this.currentRegression.type === 'linear') {
            html += `<div class="result-item">
                <span class="result-label">Slope:</span>
                <span class="result-value">${this.currentRegression.slope.toFixed(6)}</span>
            </div>`;
            html += `<div class="result-item">
                <span class="result-label">Intercept:</span>
                <span class="result-value">${this.currentRegression.intercept.toFixed(6)}</span>
            </div>`;
        } else if (this.currentRegression.type === 'exponential') {
            html += `<div class="result-item">
                <span class="result-label">Parameter a:</span>
                <span class="result-value">${this.currentRegression.a.toFixed(6)}</span>
            </div>`;
            html += `<div class="result-item">
                <span class="result-label">Parameter b:</span>
                <span class="result-value">${this.currentRegression.b.toFixed(6)}</span>
            </div>`;
        } else if (this.currentRegression.type === 'polynomial') {
            html += `<div class="result-item">
                <span class="result-label">Degree:</span>
                <span class="result-value">${this.currentRegression.degree}</span>
            </div>`;
        }

        html += '</div>';
        resultsDiv.innerHTML = html;
    }

    clearResults() {
        document.getElementById('resultsContent').innerHTML = 
            '<div class="empty-state">Run a regression analysis to see results</div>';
    }

    // View operations
    toggleGrid() {
        this.showGrid = !this.showGrid;
        document.getElementById('btn-toggle-grid').classList.toggle('active');
        localStorage.setItem('smoothgressi_grid', this.showGrid);
        this.updatePlot();
    }

    toggleLegend() {
        this.showLegend = !this.showLegend;
        document.getElementById('btn-toggle-legend').classList.toggle('active');
        localStorage.setItem('smoothgressi_legend', this.showLegend);
        this.updatePlot();
    }

    resetZoom() {
        Plotly.relayout('plotArea', {
            'xaxis.autorange': true,
            'yaxis.autorange': true
        });
    }

    setTheme(theme) {
        this.theme = theme;
        this.applyTheme(theme);
        localStorage.setItem('smoothgressi_theme', theme);
        this.setStatus(`Theme changed to ${theme}`);
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        if (document.getElementById('app').style.display !== 'none') {
            this.updatePlot();
        }
    }

    showAbout() {
        alert('Smoothgressi v2.0.0\nRegression & Analysis Suite\n\nA web-based regression analysis tool.\n\nSupports:\n• Linear Regression\n• Polynomial Regression\n• Exponential Regression\n\nBuilt with Plotly.js and vanilla JavaScript.');
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
    }

    setStatus(message) {
        document.getElementById('status-message').textContent = message;
        setTimeout(() => {
            document.getElementById('status-message').textContent = 'Ready';
        }, 3000);
    }

    showError(message) {
        alert('Error: ' + message);
        this.setStatus('Error occurred');
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SmoothgressiApp();
});
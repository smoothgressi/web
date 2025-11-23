// Translations
const translations = {
    en: {
        clear_data_subtitle: "Are you sure you want to clear all entered data?",
        error_text: "Error",
        success_text: "Success",
        warning_text: "Warning",
        info_text: "Information",
        subtitle: "Regression & Analysis Suite",
        initializing: "Initializing application...",
        open_file: "Open File",
        new_project: "New Project",
        continue: "Continue",
        home: "Home",
        data: "Data",
        analysis: "Analysis",
        view: "View",
        settings: "Settings",
        file: "File",
        open: "Open",
        save_sgxy: "Save SGXY",
        save_rgx: "Save RGX",
        clipboard: "Clipboard",
        copy: "Copy",
        paste: "Paste",
        quick_actions: "Quick Actions",
        new: "New",
        clear: "Clear",
        data_entry: "Data Entry",
        add_point: "Add Point",
        bulk_add: "Bulk Add",
        load_sample: "Load Sample",
        transform: "Transform",
        normalize: "Normalize",
        center: "Center",
        sort: "Sort",
        clean: "Clean",
        remove_dupes: "Remove Dupes",
        find_outliers: "Find Outliers",
        regression: "Regression",
        linear: "Linear",
        polynomial: "Polynomial",
        exponential: "Exponential",
        export: "Export",
        export_results: "Export",
        plot_options: "Plot Options",
        grid: "Grid",
        legend: "Legend",
        zoom: "Zoom",
        reset: "Reset",
        appearance: "Appearance",
        light: "Light",
        dark: "Dark",
        language: "Language",
        about: "About",
        data_table: "Data Table",
        rows: "rows",
        ready: "Ready",
        analysis_results: "Analysis Results",
        run_regression: "Run a regression analysis to see results",
        new_project_setup: "New Project Setup",
        column_setup: "Column Setup",
        data_entry_method: "Data Entry",
        define_columns: "Define your dataset columns:",
        numeric: "Numeric",
        string: "String",
        add_column: "Add Column",
        choose_data_entry: "Choose data entry method:",
        manual_input: "Manual Table Input",
        import_file: "Import from File (Coming Soon)",
        back: "Back",
        next: "Next",
        cancel: "Cancel",
        add_data_point: "Add Data Point",
        x_value: "X Value:",
        y_value: "Y Value:",
        bulk_add_points: "Bulk Add Data Points",
        bulk_add_desc: "Add multiple rows at once. Click \"Add Row\" to add empty rows or paste data directly into cells.",
        add_row: "Add Row",
        add_to_dataset: "Add to Dataset",
        polynomial_regression: "Polynomial Regression",
        select_degree: "Select Degree (2-10):",
        run: "Run",
        no_data: "No data - add rows to get started",
        actions: "Actions",
        point_added: "Point added",
        data_cleared: "Data cleared",
        data_copied: "Data copied to clipboard",
        no_data_to_copy: "No data to copy",
        no_data_to_save: "No data to save",
        file_saved: "File saved successfully",
        sample_loaded: "Sample data loaded",
        data_normalized: "Data normalized",
        data_centered: "Data centered",
        data_sorted: "Data sorted by X",
        no_data_normalize: "No data to normalize",
        no_data_center: "No data to center",
        no_data_sort: "No data to sort",
        removed_duplicates: "Removed {count} duplicate(s)",
        no_outliers: "No outliers detected",
        found_outliers: "Found {count} outlier(s) at rows: {indices}",
        linear_complete: "Linear regression complete",
        polynomial_complete: "Polynomial regression (degree {degree}) complete",
        exponential_complete: "Exponential regression complete",
        need_points: "Need at least {count} valid numeric points",
        no_results_export: "No regression results to export",
        results_exported: "Results exported",
        row_deleted: "Row deleted",
        added_rows: "Added {count} rows",
        pasted_rows: "Pasted {count} rows",
        failed_paste: "Failed to paste data",
        loaded_file: "Loaded {count} rows from {filename}",
        error_loading: "Error loading file: {error}",
        clear_confirm: "Clear all data",
        new_project_confirm: "Clear all current data and start a new project?",
        define_two_columns: "Please define at least 2 columns",
        columns_need_names: "All columns must have names",
        new_created: "New project created with {count} columns",
        import_coming_soon: "Import feature coming soon!",
        select_language: "Select Language / Choisir la langue",
        r_squared: "R² (Coefficient of Determination):",
        slope: "Slope:",
        intercept: "Intercept:",
        parameter_a: "Parameter a:",
        parameter_b: "Parameter b:",
        degree: "Degree:",
        about_text: "Smoothgressi v2.1.0 - Enhanced Edition\nRegression & Analysis Suite\n\nA modern table-driven regression analysis tool.\n\nFeatures:\n• Table-based data input\n• Linear, Polynomial & Exponential Regression\n• Smooth animations & modern UI\n• Real-time plot updates\n• Multi-language support\n\nBuilt with Plotly.js and vanilla JavaScript."
    },
    fr: {
        clear_data_subtitle: "Voulez-vous vraiment effacer toutes les données saisies ?",
        error_text: "Erreur",
        success_text: "Succès",
        warning_text: "Avertissement",
        info_text: "Information",
        subtitle: "Suite de Régression & Analyse",
        initializing: "Initialisation de l'application...",
        open_file: "Ouvrir un fichier",
        new_project: "Nouveau projet",
        continue: "Continuer",
        home: "Fichier",
        data: "Données",
        analysis: "Analyse",
        view: "Affichage",
        settings: "Paramètres",
        file: "Fichier",
        open: "Ouvrir",
        save_sgxy: "Enregistrer SGXY",
        save_rgx: "Enregistrer RGX",
        clipboard: "Presse-papiers",
        copy: "Copier",
        paste: "Coller",
        quick_actions: "Actions rapides",
        new: "Nouveau",
        clear: "Effacer",
        data_entry: "Saisie de données",
        add_point: "Ajouter un point",
        bulk_add: "Ajout en masse",
        load_sample: "Charger exemple",
        transform: "Transformer",
        normalize: "Normaliser",
        center: "Centrer",
        sort: "Trier",
        clean: "Nettoyer",
        remove_dupes: "Supprimer doublons",
        find_outliers: "Trouver valeurs aberrantes",
        regression: "Régression",
        linear: "Linéaire",
        polynomial: "Polynomiale",
        exponential: "Exponentielle",
        export: "Exporter",
        export_results: "Exporter",
        plot_options: "Options du graphique",
        grid: "Grille",
        legend: "Légende",
        zoom: "Zoom",
        reset: "Réinitialiser",
        appearance: "Apparence",
        light: "Clair",
        dark: "Sombre",
        language: "Langue",
        about: "À propos",
        data_table: "Tableau de données",
        rows: "lignes",
        ready: "Prêt",
        analysis_results: "Résultats d'analyse",
        run_regression: "Exécutez une analyse de régression pour voir les résultats",
        new_project_setup: "Configuration du nouveau projet",
        column_setup: "Configuration des colonnes",
        data_entry_method: "Saisie de données",
        define_columns: "Définissez les colonnes de votre ensemble de données :",
        numeric: "Numérique",
        string: "Texte",
        add_column: "Ajouter une colonne",
        choose_data_entry: "Choisissez la méthode de saisie des données :",
        manual_input: "Saisie manuelle",
        import_file: "Importer depuis un fichier (Bientôt disponible)",
        back: "Retour",
        next: "Suivant",
        cancel: "Annuler",
        add_data_point: "Ajouter un point de données",
        x_value: "Valeur X :",
        y_value: "Valeur Y :",
        bulk_add_points: "Ajout en masse de points de données",
        bulk_add_desc: "Ajoutez plusieurs lignes à la fois. Cliquez sur \"Ajouter une ligne\" pour ajouter des lignes vides ou collez les données directement dans les cellules.",
        add_row: "Ajouter une ligne",
        add_to_dataset: "Ajouter à l'ensemble de données",
        polynomial_regression: "Régression polynomiale",
        select_degree: "Sélectionner le degré (2-10) :",
        run: "Exécuter",
        no_data: "Aucune donnée - ajoutez des lignes pour commencer",
        actions: "Actions",
        point_added: "Point ajouté",
        data_cleared: "Données effacées",
        data_copied: "Données copiées dans le presse-papiers",
        no_data_to_copy: "Aucune donnée à copier",
        no_data_to_save: "Aucune donnée à enregistrer",
        file_saved: "Fichier enregistré avec succès",
        sample_loaded: "Données d'exemple chargées",
        data_normalized: "Données normalisées",
        data_centered: "Données centrées",
        data_sorted: "Données triées par X",
        no_data_normalize: "Aucune donnée à normaliser",
        no_data_center: "Aucune donnée à centrer",
        no_data_sort: "Aucune donnée à trier",
        removed_duplicates: "{count} doublon(s) supprimé(s)",
        no_outliers: "Aucune valeur aberrante détectée",
        found_outliers: "{count} valeur(s) aberrante(s) trouvée(s) aux lignes : {indices}",
        linear_complete: "Régression linéaire terminée",
        polynomial_complete: "Régression polynomiale (degré {degree}) terminée",
        exponential_complete: "Régression exponentielle terminée",
        need_points: "Besoin d'au moins {count} points numériques valides",
        no_results_export: "Aucun résultat de régression à exporter",
        results_exported: "Résultats exportés",
        row_deleted: "Ligne supprimée",
        added_rows: "{count} ligne(s) ajoutée(s)",
        pasted_rows: "{count} ligne(s) collée(s)",
        failed_paste: "Échec du collage des données",
        loaded_file: "{count} ligne(s) chargée(s) depuis {filename}",
        error_loading: "Erreur lors du chargement du fichier : {error}",
        clear_confirm: "Effacer toutes les données",
        new_project_confirm: "Effacer toutes les données actuelles et commencer un nouveau projet ?",
        define_two_columns: "Veuillez définir au moins 2 colonnes",
        columns_need_names: "Toutes les colonnes doivent avoir des noms",
        new_created: "Nouveau projet créé avec {count} colonnes",
        import_coming_soon: "Fonctionnalité d'importation bientôt disponible !",
        select_language: "Select Language / Choisir la langue",
        r_squared: "R² (Coefficient de détermination) :",
        slope: "Pente :",
        intercept: "Ordonnée à l'origine :",
        parameter_a: "Paramètre a :",
        parameter_b: "Paramètre b :",
        degree: "Degré :",
        about_text: "Smoothgressi v2.1.0 - Édition Améliorée\nSuite de Régression & Analyse\n\nUn outil d'analyse de régression moderne basé sur des tableaux.\n\nFonctionnalités :\n• Saisie de données basée sur des tableaux\n• Régression linéaire, polynomiale et exponentielle\n• Animations fluides et interface moderne\n• Mises à jour graphiques en temps réel\n• Support multilingue\n\nConstruit avec Plotly.js et JavaScript vanilla."
    }
};

// Custom Alert System - Integrated Modals
class AlertSystem {
    constructor() {
        this.modalId = 'customAlertModal';
        this.init();
    }

    init() {
        // Create the alert modal if it doesn't exist
        if (!document.getElementById(this.modalId)) {
            this.createAlertModal();
        }
    }

    createAlertModal() {
        const modalHTML = `
            <div id="${this.modalId}" class="modal">
                <div class="modal-content" style="max-width: 500px; text-align: left; display: flex; gap: 20px;">
                    <!-- Icon on the left -->
                    <div class="alert-icon" style="font-size: 48px; color: var(--accent-primary);">
                        <i class="fas fa-exclamation-circle"></i>
                    </div>

                    <!-- Text + buttons on the right -->
                    <div style="flex: 1;">
                        <h3 id="alertTitle" style="margin-bottom: 15px; color: var(--text-primary);"></h3>
                        <p id="alertMessage" style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 20px;"></p>

                        <div class="modal-buttons" style="display: flex; justify-content: right;">
                            <button id="alertConfirm" class="btn-primary">
                                <i class="fas fa-check"></i> OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listener for the confirm button
        document.getElementById('alertConfirm').addEventListener('click', () => {
            this.hide();
        });

        // Close modal when clicking outside
        document.getElementById(this.modalId).addEventListener('click', (e) => {
            if (e.target.id === this.modalId) {
                this.hide();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible()) {
                this.hide();
            }
        });
    }

    show(title, message, type = 'info') {
        const modal = document.getElementById(this.modalId);
        const titleEl = document.getElementById('alertTitle');
        const messageEl = document.getElementById('alertMessage');
        const iconEl = modal.querySelector('.alert-icon i');

        // Set content
        titleEl.textContent = title;
        messageEl.textContent = message;

        // Set icon and color based on type
        this.setAlertType(iconEl, type);

        // Show modal
        modal.classList.add('show');
        
        // Focus the confirm button
        setTimeout(() => {
            document.getElementById('alertConfirm').focus();
        }, 100);
    }

    setAlertType(iconEl, type) {
        const colors = {
            info: 'var(--accent-primary)',
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--error)'
        };

        const icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-exclamation-triangle'
        };

        iconEl.className = `fas ${icons[type] || icons.info}`;
        iconEl.parentElement.style.color = colors[type] || colors.info;
    }

    hide() {
        document.getElementById(this.modalId).classList.remove('show');
    }

    isVisible() {
        return document.getElementById(this.modalId).classList.contains('show');
    }
}

// Enhanced Alert System with different modal types
class EnhancedAlertSystem extends AlertSystem {
    constructor() {
        super();
        this.confirmModalId = 'customConfirmModal';
        this.promptModalId = 'customPromptModal';
        this.initEnhancedModals();
    }

    initEnhancedModals() {
        this.createConfirmModal();
        this.createPromptModal();
    }

    createConfirmModal() {
        const modalHTML = `
            <div id="${this.confirmModalId}" class="modal">
                <div class="modal-content" style="max-width: 500px; text-align: left; display: flex; gap: 20px;">
                    <!-- Icon on the left -->
                    <div class="confirm-icon" style="font-size: 48px; color: var(--warning);">
                        <i class="fas fa-question-circle"></i>
                    </div>

                    <!-- Text + buttons on the right -->
                    <div style="flex: 1;">
                        <h3 id="confirmTitle" style="margin-bottom: 15px; color: var(--text-primary);"></h3>
                        <p id="confirmMessage" style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 25px;"></p>

                        <div class="modal-buttons" style="display: flex; justify-content: right; gap: 15px;">
                            <button id="confirmCancel" class="btn-secondary">
                                <i class="fas fa-times"></i> Cancel
                            </button>
                            <button id="confirmOk" class="btn-primary">
                                <i class="fas fa-check"></i> OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    createPromptModal() {
        const modalHTML = `
            <div id="${this.promptModalId}" class="modal">
                <div class="modal-content" style="max-width: 500px;">
                    <h3 id="promptTitle" style="margin-bottom: 15px; color: var(--text-primary);"></h3>
                    <p id="promptMessage" style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 15px;"></p>
                    <input type="text" id="promptInput" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); margin-bottom: 25px;">
                    <div class="modal-buttons" style="justify-content: flex-end; gap: 10px;">
                        <button id="promptCancel" class="btn-secondary">
                            Cancel
                        </button>
                        <button id="promptOk" class="btn-primary">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Replacement for window.alert
    alert(message, title = 'Information') {
        return new Promise((resolve) => {
            this.show(title, message, 'info');
            
            const confirmBtn = document.getElementById('alertConfirm');
            const handler = () => {
                confirmBtn.removeEventListener('click', handler);
                this.hide();
                resolve(true);
            };
            confirmBtn.addEventListener('click', handler);
        });
    }

    // Replacement for window.confirm
    confirm(message, title = 'Confirmation') {
        return new Promise((resolve) => {
            const modal = document.getElementById(this.confirmModalId);
            const titleEl = document.getElementById('confirmTitle');
            const messageEl = document.getElementById('confirmMessage');

            titleEl.textContent = title;
            messageEl.textContent = message;

            modal.classList.add('show');

            const okHandler = () => {
                cleanup();
                resolve(true);
            };

            const cancelHandler = () => {
                cleanup();
                resolve(false);
            };

            const keyHandler = (e) => {
                if (e.key === 'Escape') cancelHandler();
                if (e.key === 'Enter') okHandler();
            };

            const cleanup = () => {
                modal.classList.remove('show');
                document.getElementById('confirmOk').removeEventListener('click', okHandler);
                document.getElementById('confirmCancel').removeEventListener('click', cancelHandler);
                document.removeEventListener('keydown', keyHandler);
            };

            document.getElementById('confirmOk').addEventListener('click', okHandler);
            document.getElementById('confirmCancel').addEventListener('click', cancelHandler);
            document.addEventListener('keydown', keyHandler);

            // Focus the cancel button by default
            setTimeout(() => {
                document.getElementById('confirmCancel').focus();
            }, 100);
        });
    }

    // Replacement for window.prompt
    prompt(message, defaultValue = '', title = 'Input') {
        return new Promise((resolve) => {
            const modal = document.getElementById(this.promptModalId);
            const titleEl = document.getElementById('promptTitle');
            const messageEl = document.getElementById('promptMessage');
            const inputEl = document.getElementById('promptInput');

            titleEl.textContent = title;
            messageEl.textContent = message;
            inputEl.value = defaultValue;

            modal.classList.add('show');

            const okHandler = () => {
                cleanup();
                resolve(inputEl.value);
            };

            const cancelHandler = () => {
                cleanup();
                resolve(null);
            };

            const keyHandler = (e) => {
                if (e.key === 'Escape') cancelHandler();
                if (e.key === 'Enter') okHandler();
            };

            const cleanup = () => {
                modal.classList.remove('show');
                document.getElementById('promptOk').removeEventListener('click', okHandler);
                document.getElementById('promptCancel').removeEventListener('click', cancelHandler);
                document.removeEventListener('keydown', keyHandler);
            };

            document.getElementById('promptOk').addEventListener('click', okHandler);
            document.getElementById('promptCancel').addEventListener('click', cancelHandler);
            document.addEventListener('keydown', keyHandler);

            // Focus the input field
            setTimeout(() => {
                inputEl.focus();
                inputEl.select();
            }, 100);
        });
    }

    // Custom success message
    success(message, title = "Succès") {
        return this.alert(message, title, 'success');
    }

    // Custom warning message
    warning(message, title = "Avertissement") {
        return this.alert(message, title, 'warning');
    }

    // Custom error message
    error(message, title = "Erreur") {
        return this.alert(message, title, 'error');
    }

    // Loading dialog (for async operations)
    showLoading(message = 'Loading...') {
        const loadingId = 'customLoadingModal';
        
        if (!document.getElementById(loadingId)) {
            const loadingHTML = `
                <div id="${loadingId}" class="modal">
                    <div class="modal-content" style="max-width: 400px; text-align: center;">
                        <div class="loading-spinner" style="width: 40px; height: 40px; border: 3px solid var(--border-color); border-top: 3px solid var(--accent-primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                        <p style="color: var(--text-secondary); margin: 0;">${message}</p>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', loadingHTML);
        }
        
        document.getElementById(loadingId).classList.add('show');
    }

    hideLoading() {
        const loadingId = 'customLoadingModal';
        const loadingModal = document.getElementById(loadingId);
        if (loadingModal) {
            loadingModal.classList.remove('show');
        }
    }
}

// Create global instance
const customAlert = new EnhancedAlertSystem();

// Override native alert/confirm/prompt (optional - use with caution)
function overrideNativeAlerts() {
    if (typeof window !== 'undefined') {
        // Only override in development or if explicitly enabled
        if (localStorage.getItem('overrideNativeAlerts') === 'true') {
            window.originalAlert = window.alert;
            window.originalConfirm = window.confirm;
            window.originalPrompt = window.prompt;

            window.alert = (message) => customAlert.alert(message);
            window.confirm = (message) => customAlert.confirm(message);
            window.prompt = (message, defaultValue) => customAlert.prompt(message, defaultValue);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    overrideNativeAlerts();
});

// Usage examples for your app:
/*
// Replace all alert() calls with:
customAlert.alert('Your message here');

// Replace confirm() calls with:
customAlert.confirm('Are you sure?').then(result => {
    if (result) {
        // User clicked OK
    }
});

// Show success messages:
customAlert.success('Operation completed successfully!');

// Show error messages:
customAlert.error('Something went wrong!');

// Show loading:
customAlert.showLoading('Processing...');
// Then hide when done:
customAlert.hideLoading();
*/

// Main Application Class
class SmoothgressiApp {
    constructor() {
        this.columns = ['X', 'Y'];
        this.data = [];
        this.currentRegression = null;
        this.showGrid = true;
        this.showLegend = true;
        this.theme = 'light';
        this.currentTab = 'home';
        this.wizardStep = 1;
        this.language = 'en';
        this.autoRowCount = 1; // Start with 1 empty row
        this.init();
    }

    init() {
        // Check for saved language
        const savedLang = this.getCookie('smoothgressi_lang');
        
        console.log("App initializing...");
        console.log("Saved language:", savedLang);
        
        if (!savedLang) {
            // First run - show language selector
            console.log("First run - showing language modal");
            this.showLanguageModal();
        } else {
            this.language = savedLang;
            this.translatePage();
            console.log("Returning user - showing splash");
            this.showSplash();
        }

        this.setupEventListeners();
        this.loadSettings();
    }

    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        modal.classList.add('show');
        
        // Hide splash screen completely during language selection
        document.getElementById('splashScreen').style.display = 'none';
    }

    // Update setLanguage to handle first run properly
    setLanguage(lang) {
        console.log("Setting language to:", lang);
        this.language = lang;
        this.setCookie('smoothgressi_lang', lang, 365);
        this.translatePage();
        
        // Hide language modal
        this.hideModal('languageModal');
        
        // Show splash screen after language selection (first run)
        if (document.getElementById('splashScreen').style.display === 'none') {
            document.getElementById('splashScreen').style.display = 'flex';
            this.showSplash();
        }
        
        this.setStatus(lang === 'en' ? 'Language changed to English' : 'Langue changée en Français');
    }

    // Make sure showSplash works correctly
    showSplash() {
        console.log("Showing splash screen");
        
        // Reset splash state
        document.getElementById('loadingSection').style.display = 'block';
        document.getElementById('actionButtons').style.display = 'none';
        
        setTimeout(() => {
            console.log("Splash loading complete");
            document.getElementById('loadingSection').style.display = 'none';
            document.getElementById('actionButtons').style.display = 'flex';
        }, 1500);
    }

    // Update hideSplash to ensure proper transition
    hideSplash() {
        console.log("Hiding splash screen");
        const splash = document.getElementById('splashScreen');
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('app').style.display = 'flex';
            this.renderTable();
            this.updatePlot();
        }, 500);
    }

    setupEventListeners() {
        // Splash buttons
        document.getElementById('btn-splash-open').addEventListener('click', () => {
            this.hideSplash();
            setTimeout(() => this.openFile(), 100);
        });

        document.getElementById('btn-splash-new').addEventListener('click', () => {
            this.hideSplash();
            setTimeout(() => this.showWizard(), 100);
        });

        //document.getElementById('btn-splash-continue').addEventListener('click', () => {
        //    this.hideSplash();
        //});

        // Ribbon tabs
        document.querySelectorAll('.ribbon-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchTab(tab));
        });

        // File operations
        document.getElementById('btn-open').addEventListener('click', () => this.openFile());
        document.getElementById('btn-save-sgxy').addEventListener('click', () => this.saveFile('sgxy'));
        document.getElementById('btn-save-rgx').addEventListener('click', () => this.saveFile('rgx'));
        document.getElementById('btn-new').addEventListener('click', () => this.showWizard());
        document.getElementById('btn-clear').addEventListener('click', () => this.clearData());

        // Clipboard
        document.getElementById('btn-copy').addEventListener('click', () => this.copyData());
        document.getElementById('btn-paste').addEventListener('click', () => this.pasteData());

        // Insert
        document.getElementById('btn-add-point').addEventListener('click', () => this.showAddPointModal());
        document.getElementById('btn-bulk-add').addEventListener('click', () => this.showBulkAdd());
        document.getElementById('btn-load-sample').addEventListener('click', () => this.loadSampleData());

        // Data operations
        document.getElementById('btn-normalize').addEventListener('click', () => this.normalizeData());
        document.getElementById('btn-center').addEventListener('click', () => this.centerData());
        document.getElementById('btn-sort').addEventListener('click', () => this.sortData());
        document.getElementById('btn-remove-duplicates').addEventListener('click', () => this.removeDuplicates());
        document.getElementById('btn-detect-outliers').addEventListener('click', () => this.detectOutliers());

        // Regression
        document.getElementById('btn-linear').addEventListener('click', () => this.runLinearRegression());
        document.getElementById('btn-polynomial').addEventListener('click', () => this.showPolynomialModal());
        document.getElementById('btn-exponential').addEventListener('click', () => this.runExponentialRegression());
        document.getElementById('btn-export-results').addEventListener('click', () => this.exportResults());

        // View
        document.getElementById('btn-toggle-grid').addEventListener('click', () => this.toggleGrid());
        document.getElementById('btn-toggle-legend').addEventListener('click', () => this.toggleLegend());
        document.getElementById('btn-zoom-reset').addEventListener('click', () => this.resetZoom());

        // Theme
        document.getElementById('btn-theme-light').addEventListener('click', () => this.setTheme('light'));
        document.getElementById('btn-theme-dark').addEventListener('click', () => this.setTheme('dark'));
        
        // Language
        document.getElementById('btn-lang-en').addEventListener('click', () => this.setLanguage('en'));
        document.getElementById('btn-lang-fr').addEventListener('click', () => this.setLanguage('fr'));
        
        document.getElementById('btn-about').addEventListener('click', () => this.showAbout());

        // Wizard
        document.getElementById('wizard-next').addEventListener('click', () => this.wizardNext());
        document.getElementById('wizard-back').addEventListener('click', () => this.wizardBack());
        document.getElementById('wizard-cancel').addEventListener('click', () => this.hideModal('wizardModal'));

        // Add Point Modal
        document.getElementById('add-point-confirm').addEventListener('click', () => this.confirmAddPoint());
        document.getElementById('add-point-cancel').addEventListener('click', () => this.hideModal('addPointModal'));

        // Bulk Add Modal
        document.getElementById('bulk-add-confirm').addEventListener('click', () => this.confirmBulkAdd());
        document.getElementById('bulk-add-cancel').addEventListener('click', () => this.hideModal('bulkAddModal'));

        // Polynomial
        document.getElementById('poly-confirm').addEventListener('click', () => this.runPolynomialRegression());
        document.getElementById('poly-cancel').addEventListener('click', () => this.hideModal('polynomialModal'));

        // File input
        document.getElementById('fileInput').addEventListener('change', (e) => this.handleFileSelect(e));
    }


    translatePage() {
        const trans = translations[this.language];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (trans[key]) {
                if (el.tagName === 'INPUT' && el.type !== 'number') {
                    el.placeholder = trans[key];
                } else {
                    el.textContent = trans[key];
                }
            }
        });
        
        // Update dynamic content
        this.renderTable();
    }

    t(key, params = {}) {
        let text = translations[this.language][key] || key;
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
        return text;
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
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

    switchTab(tab) {
        document.querySelectorAll('.ribbon-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const tabName = tab.dataset.tab;
        this.currentTab = tabName;

        document.querySelectorAll('.ribbon-panel').forEach(p => p.classList.remove('active'));
        document.querySelector(`.ribbon-panel[data-panel="${tabName}"]`).classList.add('active');

        // Show table in center on Data tab, plot on others
        const plotArea = document.getElementById('plotArea');
        const centerTable = document.getElementById('centerTableContainer');
        const dataPanel = document.getElementById('dataPanel');

        if (tabName === 'data') {
            plotArea.style.display = 'none';
            centerTable.style.display = 'block';
            dataPanel.classList.add('hidden');
            this.renderTable('center');
        } else {
            plotArea.style.display = 'block';
            centerTable.style.display = 'none';
            dataPanel.classList.remove('hidden');
            this.renderTable('side');
            this.updatePlot();
        }
    }

    // Wizard Functions
    showWizard() {
        //if (this.data.length > 0) {
        //    if (!confirm(this.t('new_project_confirm'))) return;
        //}
        
        this.wizardStep = 1;
        document.querySelectorAll('.wizard-step').forEach(s => {
            s.classList.remove('active', 'completed');
        });
        document.querySelectorAll('.wizard-page').forEach(p => {
            p.classList.remove('active');
        });
        
        document.querySelector('.wizard-step[data-step="1"]').classList.add('active');
        document.querySelector('.wizard-page[data-page="1"]').classList.add('active');
        
        document.getElementById('wizard-back').style.display = 'none';
        document.getElementById('wizard-next').style.display = 'inline-block';
        
        document.getElementById('wizardModal').classList.add('show');
    }

    wizardNext() {
        if (this.wizardStep === 1) {
            const columnItems = document.querySelectorAll('#columnList .column-item');
            if (columnItems.length < 2) {
                customAlert.error(this.t('define_two_columns'));
                return;
            }

            const columns = [];
            let valid = true;
            columnItems.forEach(item => {
                const input = item.querySelector('input');
                if (!input.value.trim()) {
                    valid = false;
                    customAlert.error(this.t('columns_need_names'));
                }
                columns.push(input.value.trim());
            });

            if (!valid) return;

            this.columns = columns;
            
            document.querySelector('.wizard-step[data-step="1"]').classList.remove('active');
            document.querySelector('.wizard-step[data-step="1"]').classList.add('completed');
            document.querySelector('.wizard-step[data-step="2"]').classList.add('active');
            
            document.querySelector('.wizard-page[data-page="1"]').classList.remove('active');
            document.querySelector('.wizard-page[data-page="2"]').classList.add('active');
            
            document.getElementById('wizard-back').style.display = 'inline-block';
            document.getElementById('wizard-next').style.display = 'none';
            
            this.wizardStep = 2;
        }
    }

    wizardBack() {
        if (this.wizardStep === 2) {
            document.querySelector('.wizard-step[data-step="2"]').classList.remove('active');
            document.querySelector('.wizard-step[data-step="1"]').classList.remove('completed');
            document.querySelector('.wizard-step[data-step="1"]').classList.add('active');
            
            document.querySelector('.wizard-page[data-page="2"]').classList.remove('active');
            document.querySelector('.wizard-page[data-page="1"]').classList.add('active');
            
            document.getElementById('wizard-back').style.display = 'none';
            document.getElementById('wizard-next').style.display = 'inline-block';
            
            this.wizardStep = 1;
        }
    }

    addColumn() {
        const columnList = document.getElementById('columnList');
        const div = document.createElement('div');
        div.className = 'column-item';
        div.innerHTML = `
            <input type="text" placeholder="Column name">
            <select>
                <option value="numeric">${this.t('numeric')}</option>
                <option value="string">${this.t('string')}</option>
            </select>
            <button class="btn-remove" onclick="app.removeColumn(this)">
                <i class="fas fa-times"></i>
            </button>
        `;
        columnList.appendChild(div);
    }

    removeColumn(btn) {
        const item = btn.closest('.column-item');
        item.style.animation = 'rowSlideOut 0.3s ease-out';
        setTimeout(() => item.remove(), 300);
    }

    finishWizard(method) {
        if (method === 'manual') {
            this.data = [];
            this.hideModal('wizardModal');
            this.ensureEmptyRows();
            this.renderTable();
            this.updatePlot();
            this.setStatus(this.t('new_created', { count: this.columns.length }));
        } else {
            customAlert.alert(this.t('import_coming_soon'));
        }
    }

    // Auto-row management
    ensureEmptyRows() {
        // Always maintain at least one empty row for easy data entry
        const hasEmptyRow = this.data.some(row => row.every(cell => !cell || cell.trim() === ''));
        if (!hasEmptyRow) {
            this.data.push(new Array(this.columns.length).fill(''));
        }
    }

    // Table Rendering
    renderTable(location = 'side') {
        const container = location === 'center' ? 
            document.getElementById('centerTableContainer') : 
            document.getElementById('sideTableContainer');
        
        // Ensure we have at least one empty row
        this.ensureEmptyRows();
        
        let html = `
            <table class="editable-table">
                <thead>
                    <tr>
                        <th>#</th>
                        ${this.columns.map(col => `<th>${col}</th>`).join('')}
                        <th>${this.t('actions')}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.data.forEach((row, i) => {
            html += `<tr>
                <td>${i + 1}</td>
                ${this.columns.map((col, j) => `
                    <td>
                        <input type="text" value="${row[j] || ''}" 
                            onchange="app.updateCell(${i}, ${j}, this.value)"
                            onblur="app.handleCellBlur(${i})">
                    </td>
                `).join('')}
                <td>
                    <button class="action-btn delete" onclick="app.deleteRow(${i})" title="${this.t('row_deleted')}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>`;
        });

        html += `
                </tbody>
            </table>
        `;

        container.innerHTML = html;

        // Update counter (exclude empty rows)
        const count = this.data.filter(row => row.some(cell => cell && cell.trim() !== '')).length;
        document.getElementById('point-count-side').innerHTML = `${count} <span data-i18n="rows">${this.t('rows')}</span>`;
    }

    updateCell(rowIndex, colIndex, value) {
        if (!this.data[rowIndex]) {
            this.data[rowIndex] = [];
        }
        this.data[rowIndex][colIndex] = value;
    }

    handleCellBlur(rowIndex) {
        // Check if this row has any data
        const hasData = this.data[rowIndex] && this.data[rowIndex].some(cell => cell && cell.trim() !== '');
        
        if (hasData) {
            // Data was entered, ensure we have another empty row
            this.ensureEmptyRows();
            this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        }
        
        this.updatePlot();
    }

    deleteRow(index) {
        const row = event.target.closest('tr');
        row.classList.add('removing');
        
        setTimeout(() => {
            this.data.splice(index, 1);
            this.ensureEmptyRows();
            this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
            this.updatePlot();
            this.setStatus(this.t('row_deleted'));
        }, 300);
    }

    // Add Point Modal
    showAddPointModal() {
        document.getElementById('add-point-x').value = '';
        document.getElementById('add-point-y').value = '';
        document.getElementById('addPointModal').classList.add('show');
        document.getElementById('add-point-x').focus();
    }

    confirmAddPoint() {
        const x = document.getElementById('add-point-x').value;
        const y = document.getElementById('add-point-y').value;

        if (!x || !y) {
            customAlert.error(this.t('columns_need_names'));
            return;
        }

        // Find first empty row or add new one
        let emptyRowIndex = this.data.findIndex(row => row.every(cell => !cell || cell.trim() === ''));
        if (emptyRowIndex === -1) {
            emptyRowIndex = this.data.length;
            this.data.push(new Array(this.columns.length).fill(''));
        }
        
        this.data[emptyRowIndex][0] = x;
        this.data[emptyRowIndex][1] = y;
        
        this.hideModal('addPointModal');
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('point_added'));
    }

    // Bulk Add
    showBulkAdd() {
        const modal = document.getElementById('bulkAddModal');
        const header = document.getElementById('bulkAddTableHeader');
        const body = document.getElementById('bulkAddTableBody');

        header.innerHTML = `
            <th>#</th>
            ${this.columns.map(col => `<th>${col}</th>`).join('')}
        `;

        body.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            this.addBulkRow();
        }

        modal.classList.add('show');
    }

    addBulkRow() {
        const body = document.getElementById('bulkAddTableBody');
        const rowNum = body.children.length + 1;
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${rowNum}</td>
            ${this.columns.map((_, j) => `
                <td><input type="text" data-col="${j}"></td>
            `).join('')}
        `;
        
        body.appendChild(tr);
    }

    confirmBulkAdd() {
        const rows = document.querySelectorAll('#bulkAddTableBody tr');
        let added = 0;

        rows.forEach(row => {
            const inputs = row.querySelectorAll('input');
            const values = Array.from(inputs).map(input => input.value.trim());
            
            if (values.some(v => v !== '')) {
                // Find first empty row or add new one
                let emptyRowIndex = this.data.findIndex(r => r.every(cell => !cell || cell.trim() === ''));
                if (emptyRowIndex === -1) {
                    emptyRowIndex = this.data.length;
                    this.data.push(new Array(this.columns.length).fill(''));
                }
                this.data[emptyRowIndex] = values;
                added++;
            }
        });

        this.hideModal('bulkAddModal');
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('added_rows', { count: added }));
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
                this.setStatus(this.t('loaded_file', { count: this.data.length, filename: file.name }));
            } catch (error) {
                customAlert.error(this.t('error_loading', { error: error.message }));
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    }

    importRGX(content) {
        const lines = content.split('\n');
        const rows = [];

        lines.forEach(line => {
            line = line.trim();
            if (!line || line.startsWith('#')) return;

            const parts = line.split(/[;,\t ]+/);
            if (parts.length >= 2) {
                const xVal = parts[0];
                const yVal = parts[1];
                if (xVal && yVal) {
                    rows.push([xVal, yVal]);
                }
            }
        });

        this.columns = ['X', 'Y'];
        this.data = rows;
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
    }

    importSGXY(content) {
        const json = JSON.parse(content);
        if (!json.points || !Array.isArray(json.points)) {
            throw new Error('Invalid SGXY format');
        }

        const rows = [];
        json.points.forEach(point => {
            if (Array.isArray(point) && point.length >= 2) {
                rows.push([point[0].toString(), point[1].toString()]);
            }
        });

        this.columns = ['X', 'Y'];
        this.data = rows;
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
    }

    saveFile(format) {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        
        if (validData.length === 0) {
            customAlert.error(this.t('no_data_to_save'));
            return;
        }

        let content, filename, mimeType;

        if (format === 'rgx') {
            content = this.exportRGX(validData);
            filename = 'data.rgx';
            mimeType = 'text/plain';
        } else {
            content = this.exportSGXY(validData);
            filename = 'data.sgxy';
            mimeType = 'application/json';
        }

        this.downloadFile(content, filename, mimeType);
        this.setStatus(this.t('file_saved'));
    }

    exportRGX(validData) {
        let content = '# Smoothgressi Data Export\n';
        content += `# Date: ${new Date().toISOString()}\n`;
        content += '# Format: x;y\n';
        content += `# Points: ${validData.length}\n#\n`;
        
        validData.forEach(row => {
            if (row[0] && row[1]) {
                content += `${row[0]};${row[1]}\n`;
            }
        });
        
        return content;
    }

    exportSGXY(validData) {
        const points = validData
            .filter(row => row[0] && row[1])
            .map(row => [parseFloat(row[0]) || row[0], parseFloat(row[1]) || row[1]]);
        
        const json = {
            points: points,
            metadata: {
                application: 'Smoothgressi',
                version: '2.1.0',
                created: new Date().toISOString(),
                point_count: points.length
            }
        };
        return JSON.stringify(json, null, 2);
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

    async clearData() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        
        if (validData.length > 0) {
            const result = await customAlert.confirm(this.t('clear_data_subtitle'), this.t('clear_confirm'));
            if (!result) return; // User cancelled
        }
        
        // If we get here, either no data or user confirmed
        customAlert.showLoading(this.t('data_cleared'));
        this.data = [];
        this.currentRegression = null;
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.clearResults();
        this.setStatus(this.t('data_cleared'));
        customAlert.hideLoading();
    }

    copyData() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        
        if (validData.length === 0) {
            customAlert.error(this.t('no_data_to_copy'));
            return;
        }

        const text = validData.map(row => row.join('\t')).join('\n');
        
        navigator.clipboard.writeText(text).then(() => {
            this.setStatus(this.t('data_copied'));
        });
    }

    async pasteData() {
        try {
            const text = await navigator.clipboard.readText();
            const lines = text.trim().split('\n');
            const rows = [];

            lines.forEach(line => {
                const parts = line.split(/[\t,; ]+/);
                if (parts.length >= 2) {
                    const values = parts.slice(0, this.columns.length).map(v => v.trim());
                    if (values.some(v => v)) {
                        rows.push(values);
                    }
                }
            });

            if (rows.length > 0) {
                this.data = rows;
                this.ensureEmptyRows();
                this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
                this.updatePlot();
                this.setStatus(this.t('pasted_rows', { count: rows.length }));
            }
        } catch (error) {
            customAlert.error(this.t('failed_paste'));
        }
    }

    loadSampleData() {
        this.columns = ['X', 'Y'];
        this.data = [
            ['1', '2.1'],
            ['2', '4.0'],
            ['3', '5.9'],
            ['4', '8.1'],
            ['5', '9.9'],
            ['6', '12.0'],
            ['7', '14.1'],
            ['8', '15.9'],
            ['9', '18.0'],
            ['10', '20.1']
        ];
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('sample_loaded'));
    }

    // Data Operations
    getNumericData() {
        const x = [], y = [];
        this.data.forEach(row => {
            if (row[0] && row[1]) {
                const xVal = parseFloat(row[0]);
                const yVal = parseFloat(row[1]);
                if (!isNaN(xVal) && !isNaN(yVal)) {
                    x.push(xVal);
                    y.push(yVal);
                }
            }
        });
        return { x, y };
    }

    normalizeData() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        if (validData.length === 0) {
            customAlert.error(this.t('no_data_normalize'));
            return;
        }
        const numData = this.getNumericData();
        const normalized = regressionEngine.normalize(numData);
        this.data = normalized.x.map((x, i) => [x.toString(), normalized.y[i].toString()]);
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('data_normalized'));
    }

    centerData() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        if (validData.length === 0) {
            customAlert.error(this.t('no_data_center'));
            return;
        }
        const numData = this.getNumericData();
        const centered = regressionEngine.center(numData);
        this.data = centered.x.map((x, i) => [x.toString(), centered.y[i].toString()]);
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('data_centered'));
    }

    sortData() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        if (validData.length === 0) {
            customAlert.error(this.t('no_data_sort'));
            return;
        }
        const numData = this.getNumericData();
        const sorted = regressionEngine.sortByX(numData);
        this.data = sorted.x.map((x, i) => [x.toString(), sorted.y[i].toString()]);
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('data_sorted'));
    }

    removeDuplicates() {
        const validData = this.data.filter(row => row.some(cell => cell && cell.trim() !== ''));
        if (validData.length === 0) {
            customAlert.error(this.t('no_data'));
            return;
        }
        const originalCount = validData.length;
        const numData = this.getNumericData();
        const unique = regressionEngine.removeDuplicates(numData);
        this.data = unique.x.map((x, i) => [x.toString(), unique.y[i].toString()]);
        const removed = originalCount - this.data.length;
        this.ensureEmptyRows();
        this.renderTable(this.currentTab === 'data' ? 'center' : 'side');
        this.updatePlot();
        this.setStatus(this.t('removed_duplicates', { count: removed }));
    }

    detectOutliers() {
        const numData = this.getNumericData();
        if (numData.x.length === 0) {
            customAlert.error(this.t('no_data'));
            return;
        }
        const outliers = regressionEngine.detectOutliers(numData, 3.0);
        if (outliers.length === 0) {
            this.setStatus(this.t('no_outliers'));
        } else {
            this.setStatus(this.t('found_outliers', { 
                count: outliers.length, 
                indices: outliers.map(i => i + 1).join(', ')
            }));
        }
    }

    // Regression Operations
    runLinearRegression() {
        const numData = this.getNumericData();
        if (numData.x.length < 2) {
            customAlert.error(this.t('need_points', { count: 2 }));
            return;
        }

        try {
            this.currentRegression = {
                type: 'linear',
                ...regressionEngine.linearRegression(numData.x, numData.y)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus(this.t('linear_complete'));
        } catch (error) {
            customAlert.error(error.message);
        }
    }

    showPolynomialModal() {
        document.getElementById('polynomialModal').classList.add('show');
        document.getElementById('poly-degree').value = 2;
    }

    runPolynomialRegression() {
        const degree = parseInt(document.getElementById('poly-degree').value);
        
        if (degree < 1 || degree > 10) {
            customAlert.error('Degree must be between 1 and 10');
            return;
        }

        const numData = this.getNumericData();
        if (numData.x.length < degree + 1) {
            customAlert.error(this.t('need_points', { count: degree + 1 }));
            return;
        }

        try {
            this.hideModal('polynomialModal');
            this.currentRegression = {
                type: 'polynomial',
                ...regressionEngine.polynomialRegression(numData.x, numData.y, degree)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus(this.t('polynomial_complete', { degree: degree }));
        } catch (error) {
            customAlert.error(error.message);
        }
    }

    runExponentialRegression() {
        const numData = this.getNumericData();
        if (numData.x.length < 2) {
            customAlert.error(this.t('need_points', { count: 2 }));
            return;
        }

        try {
            this.currentRegression = {
                type: 'exponential',
                ...regressionEngine.exponentialRegression(numData.x, numData.y)
            };
            this.updatePlot();
            this.displayResults();
            this.setStatus(this.t('exponential_complete'));
        } catch (error) {
            customAlert.error(error.message);
        }
    }

    exportResults() {
        if (!this.currentRegression) {
            customAlert.error(this.t('no_results_export'));
            return;
        }

        const resultsText = document.getElementById('resultsContent').innerText;
        this.downloadFile(resultsText, 'regression_results.txt', 'text/plain');
        this.setStatus(this.t('results_exported'));
    }

    // Display Operations
    updatePlot() {
        if (this.currentTab === 'data') return;

        const numData = this.getNumericData();
        const traces = [];

        if (numData.x.length > 0) {
            traces.push({
                x: numData.x,
                y: numData.y,
                mode: 'markers',
                type: 'scatter',
                name: this.t('data'),
                marker: { size: 8, color: '#2563eb' }
            });
        }

        if (this.currentRegression && this.currentRegression.predicted_y) {
            const combined = numData.x.map((x, i) => ({
                x: x,
                y: this.currentRegression.predicted_y[i]
            }));
            combined.sort((a, b) => a.x - b.x);

            traces.push({
                x: combined.map(p => p.x),
                y: combined.map(p => p.y),
                mode: 'lines',
                type: 'scatter',
                name: this.t('regression'),
                line: { color: '#ef4444', width: 2 }
            });
        }

        const layout = {
            title: this.t('data'),
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

    displayResults() {
        const resultsDiv = document.getElementById('resultsContent');
        
        if (!this.currentRegression) {
            resultsDiv.innerHTML = `<div class="empty-state">${this.t('run_regression')}</div>`;
            return;
        }

        let html = '<div class="result-section">';
        html += `<h4>${this.currentRegression.type.toUpperCase()} ${this.t('regression')}</h4>`;

        if (this.currentRegression.equation) {
            html += `<div class="equation-display">${this.currentRegression.equation}</div>`;
        }

        html += '<div class="result-item">';
        html += `<span class="result-label">${this.t('r_squared')}</span>`;
        html += `<span class="result-value">${this.currentRegression.r_squared.toFixed(6)}</span>`;
        html += '</div>';

        if (this.currentRegression.type === 'linear') {
            html += `<div class="result-item">
                <span class="result-label">${this.t('slope')}</span>
                <span class="result-value">${this.currentRegression.slope.toFixed(6)}</span>
            </div>`;
            html += `<div class="result-item">
                <span class="result-label">${this.t('intercept')}</span>
                <span class="result-value">${this.currentRegression.intercept.toFixed(6)}</span>
            </div>`;
        } else if (this.currentRegression.type === 'exponential') {
            html += `<div class="result-item">
                <span class="result-label">${this.t('parameter_a')}</span>
                <span class="result-value">${this.currentRegression.a.toFixed(6)}</span>
            </div>`;
            html += `<div class="result-item">
                <span class="result-label">${this.t('parameter_b')}</span>
                <span class="result-value">${this.currentRegression.b.toFixed(6)}</span>
            </div>`;
        } else if (this.currentRegression.type === 'polynomial') {
            html += `<div class="result-item">
                <span class="result-label">${this.t('degree')}</span>
                <span class="result-value">${this.currentRegression.degree}</span>
            </div>`;
        }

        html += '</div>';
        resultsDiv.innerHTML = html;
    }

    clearResults() {
        document.getElementById('resultsContent').innerHTML = 
            `<div class="empty-state">${this.t('run_regression')}</div>`;
    }

    // View Operations
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
        this.setStatus(this.language === 'en' ? `Theme changed to ${theme}` : `Thème changé en ${theme === 'light' ? 'clair' : 'sombre'}`);
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
        customAlert.alert(this.t('about_text'));
    }

    hideModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
    }

    setStatus(message) {
        document.getElementById('status-message').textContent = message;
        setTimeout(() => {
            document.getElementById('status-message').textContent = this.t('ready');
        }, 3000);
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SmoothgressiApp();
});
# AI Coding Guidelines for Formulário Project

## Project Overview
This is an educational project combining a web form interface and a Python statistics calculator. The web component collects user data for a multimedia course, while the Python script computes descriptive statistics.

## Architecture
- **Web Interface**: Static HTML/CSS/JS form (`index.html`) with validation
- **Styling**: Centralized in `css/estilo.css` with responsive form layout
- **JavaScript**: Form validation in `js/formulario.js` using event listeners
- **Python Utility**: Standalone statistics calculator in `css/Trabalho pyton` (note: file placed in css/ folder despite being Python)

## Key Patterns
- **Language**: All user-facing content and comments in Portuguese (pt-br)
- **Validation**: Client-side only using `alert()` for errors, prevents form submission with `event.preventDefault()`
- **Input Handling**: Trim whitespace from text inputs, basic email check (presence of '@')
- **Python Functions**: Pure functions for statistics calculations, input validation with try/except
- **File Structure**: Flat organization with separate folders for css/ and js/

## Development Workflow
- **Web Testing**: Open `index.html` directly in browser (no server required)
- **Python Execution**: Run with `python3 "css/Trabalho pyton"` (note space in filename)
- **Form Fields**: Use semantic HTML5 inputs (email, tel, number, range) with datalist for city suggestions

## Code Conventions
- **JavaScript**: DOM manipulation via `getElementById()`, event listeners for dynamic updates
- **Python**: Functions with clear docstrings, list comprehensions avoided in favor of explicit loops
- **HTML**: Fieldsets for logical grouping, required attributes on critical fields
- **CSS**: Simple responsive design with max-width containers

## Common Tasks
- **Adding Form Fields**: Update HTML, CSS (if needed), and validation logic in `js/formulario.js`
- **Python Enhancements**: Add statistical functions following the existing pattern (input validation → calculation → return)
- **Styling Changes**: Modify `css/estilo.css` for consistent form appearance

## Dependencies
- None required - uses only browser APIs and Python standard library
- No package managers or build tools needed</content>
<parameter name="filePath">/Users/viniciuszferreira/Documents/formulario/.github/copilot-instructions.md
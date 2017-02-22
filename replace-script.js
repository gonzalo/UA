/**
 * USE:
 *  1. edit substitution_rules array to match your needs
 *  2. install rhino javascript machine
 *  3. run script with $rhino replace-script.js inputfile
 */

/**
 * Configure patters substitution in this section
 *
 */
var substitution_rules = [{
        pattern: '&#160;',
        substitution: '&nbsp;'
    },
    {
        //insertar cabecera de tabla
        pattern: '<p>&nbsp;<\/p>\n<div>(.*)<\/div>\n<p>&nbsp;<\/p>',
        substitution: '<div>$1<\/div>\n<p>&nbsp;<\/p>\n<table  border="1px">'
    },
    {
        //insertar pie de tabla
        pattern: '<hr class="sep" \/>\n<p>&nbsp;<\/p>',
        substitution: '<hr class="sep" \/>\n<\/table>\n<p>&nbsp;<\/p>'
    },
    {
        //etiquetas de sección. Cogen dos columnas
        pattern: '<div class="enunciado">(.*)<\/div>\n<hr class="sep" \/>\n',
        substitution: '\t<tr>\n\t\t<td colspan="2">$1<\/td>\n\t<\/tr>\n'
    },
    {
        //
        pattern: '<div class="enunciado">(.*)<\/div>\n<div class="respuestadada">(.*)<\/div>\n<div class="comentario">(.*)<\/div>\n<hr class="sep" \/>\n',
        substitution: '\t<tr>\n\t\t<td class="enunciado" width="30%">$1<\/td>\n\t\t<td>$2<\/td>\n\t<\/tr><tr><td><\/td><td>$3<\/td><\/tr>\n'
    },
    {
        //campos preguntas normales
        pattern: '<div class="enunciado">(.*)<\/div>\n<div class="respuestadada">(.*)<\/div>\n<hr class="sep" \/>\n',
        substitution: '\t<tr>\n\t\t<td class="enunciado" width="30%">$1<\/td>\n\t\t<td>$2<\/td>\n\t<\/tr>\n'
    },
    {
        //campos tipo observaciones
        pattern: '<div class="respuestadada">(.*)<\/div>\n<div class="comentario">(.*)<\/div>\n<hr class="sep" \/>\n',
        substitution: '\t<tr>\n\t\t<td class="enunciado" width="30%">$1<\/td>\n\t\t<td>$2<\/td>\n\t<\/tr>\n'
    },
];


/*
 * Main execution
 *
 */

var input, output, result;

//open file
try {
    var input = readFile(arguments[0]);
} catch (e) {
    print("Error debe especificar un fichero válido de entrada");
    quit(1);
}

for (i = 0; i < substitution_rules.length; i++) {
    //catch rule and config pattern matching
    rule = substitution_rules[i];
    reg_exp = new RegExp(rule['pattern'], 'g');

    //do substitution
    result = input.replace(reg_exp, rule['substitution']);

    //load result on input to process next rule
    input = result;
}

print(result);

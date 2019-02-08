// function parserExpression
function parserExpression(program) {
    program = skipSpace(program);
    console.log(program, ":value program");
    let match, expr;
    if (match = /^"([^"]*)"/.exec(program)) {
        expr = { type: "value", value: match[1] };
        console.log(expr, ": expr case 1");
    } else if (match = /^\d+\b/.exec(program)) {
        expr = { type: "value", value: Number(match[0]) };
        console.log(expr, ": expr case 2");
    } else if (match = /^[^\s(), #"]+/.exec(program)) {
        expr = { type: "word", name: match[0] };
        console.log(expr, ": expr case 3");
    } else {
        throw new SyntaxError("Unexpected syntax:" + program);
    }
    return parseApply(expr, program.slice(match[0].length));
}

// function skipSpace
function skipSpace(string) {
    let first = string.search(/\S/);
    console.log(first, ":value first");
    if (first == -1) return "";
    var resFirst = string.slice(first);
    console.log(resFirst, ":slice of first");
    return string.slice(first);
}

// function parseApply
function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return { expr: expr, rest: program };
    }
    program = skipSpace(program.slice(1));
    expr = { type: "apply", operator: expr, args: [] };
    while (program[0] != ")") {
        let args = parserExpression(program);
        expr.args.push(args.expr);
        program = skipSpace(args.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}

// function parse
function parse(program) {
    let {expr, rest} = parserExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}

console.log(parse("+(a, 10)"));

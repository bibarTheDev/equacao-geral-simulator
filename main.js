function checkreta(){
    if (!document.getElementById('AX').value || !document.getElementById('AY').value || !document.getElementById('BX').value || !document.getElementById('BY').value){
        document.getElementById('reta-eq').innerHTML = "";
        document.getElementById('teste').style.visibility = "hidden";
        return;
    }

    var pontos = [];
    pontos["AX"] = parseFloat(document.getElementById('AX').value);
    pontos["AY"] = parseFloat(document.getElementById('AY').value);
    pontos["BX"] = parseFloat(document.getElementById('BX').value);
    pontos["BY"] = parseFloat(document.getElementById('BY').value);

    if(pontos["AX"] == pontos["BX"] && pontos["AY"] == pontos["BY"]){
        document.getElementById('reta-eq').innerHTML = "";
        document.getElementById('reta-eq-err').innerHTML = "Os pontos sao iguais";
        document.getElementById('teste').style.visibility = "hidden";
        return;
    }

    var linhas = [];
    linhas["pos-X"] = pontos["AY"];
    linhas["pos-Y"] = pontos["BX"];
    linhas["pos-S"] = pontos["AX"] * pontos["BY"];
    linhas["neg-X"] = pontos["BY"] * -1;
    linhas["neg-Y"] = pontos["AX"] * -1;
    linhas["neg-S"] = pontos["AY"] * pontos["BX"] * -1;

    linhas["pos-X"] += linhas["neg-X"];
    linhas["pos-Y"] += linhas["neg-Y"];
    linhas["pos-S"] += linhas["neg-S"];

    eq = "(" + linhas["pos-X"] + "x) + (" + linhas["pos-Y"] + "y) + (" + linhas["pos-S"] + ") = 0";
    var eqr = linhas["pos-X"] + "x + " + linhas["pos-Y"] + "y + " + linhas["pos-S"] + " = 0";

    document.getElementById('reta-eq').innerHTML = eqr;
    document.getElementById('reta-eq-err').innerHTML = "";
    document.getElementById('teste').style.visibility = "visible";
    checkteste();
}

function checkteste(){
    if (!document.getElementById('NX').value || !document.getElementById('NY').value){
        document.getElementById('teste-rst').innerHTML = "";
        return;
    }

    var pontos = [];
    pontos["NX"] = parseFloat(document.getElementById('NX').value);
    pontos["NY"] = parseFloat(document.getElementById('NY').value);

    var teste = eq;
    teste = teste.replace("x", " * " + pontos["NX"]);
    teste = teste.replace("y", " * " + pontos["NY"]);
    teste = teste.replace(" = 0", "");

    document.getElementById('teste-rst').innerHTML = (eval(teste) == 0) ? "pertence" : "nao pertence";
}

var eq = "";

//nota de rodape: javascript eh INFERNAL

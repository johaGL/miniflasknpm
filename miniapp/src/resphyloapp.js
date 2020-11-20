import hljs from 'highlight.js';
import * as d3 from "d3";
require('underscore');
require('jquery');
require('d3-hierarchy');
require('d3-line');
require('d3-time-format');
require('phylotree');
require('phylotree/build/phylotree.css');
import LOSH from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function component2() { //this tests if lodash ok
    var element = document.createElement('div')
    element.innerHTML = LOSH.join(['npm','run','watch == GREAT!!!'], ' ');
    return element;
 }
document.body.appendChild(component2());

function mytextbox(atext,idnew){
    //var paramsString = "unechaine";
    var display = document.createElement("TEXTAREA");
    display.setAttribute("id", idnew);
    var t = document.createTextNode(atext);
    display.appendChild(t);
    document.body.appendChild(display);
    var papa = document.getElementById("childElement");
    var parentDiv = papa.parentNode;
    parendDiv.insertBefore(display,papa); 

}

function pending(){
    let datata = document.getElementById("data_stri").innerHTML;
    let jobj = JSON.parse(datata);
    //return alert(jobj.thetas[0]);
    return "thisisoutfrompending";
};
function doboxes(){
    //var values = ["Volvo", "Saab", "Fiat"];
    //return alert(values[0]);
    mytextbox("blah","coso");
};


var treeNewickString = "(A:0.1,B:0.2,(C:0.3,D:0.4):0.5)";
var example_tree = "(A:0.1,B:0.2,(C:0.3,D:0.4):0.5)";
const height = 900;
const width = 900;


d3.text(treeNewickString, function(error, newick){
    var tree = d3.layout.phylotree()
        .svg(d3.select("#tree_display"))
        .options({ 
            'left-right-spacing': 'fit-to-size',
            'top-bottom-spacing': 'fit-to-size',
            'selectable': true,
            'zoom':true,
            'right-offset':1, //this fixes the prlm right side, 
                    // but only works in d3version5 and npm
            'left-offset':0,
            'collapsible':false
        }).size([height,width])
        .node_circle_size(2);
    tree(treeNewickString)
        .layout();

    $("#layout").on("click", function(e) {
        tree.radial($(this).prop("checked")).placenodes().update();
        });
    }); // end d3.text
    hljs.initHighlightingOnLoad();



let y = document.querySelector('button#y');
y.addEventListener("click", () => {
    alert("TODO: add pending funciton");
})
window.onload = component2,doboxes;
//window.addEventListener


/*
function ouch(){
    var ns="http://www.w3.org/2000/svg";
    var svg = document.getElementsByTagName('svg');
    var newElem = document.createElementNS(ns,"circle");
    newElem.setAttribute("cx",100);
    newElem.setAttribute("cy",100);
    newElem.setAttribute("r",50);
    svg.appendChild(newElem); 
    return alert(newElem);
}
*/

//document.body.appendChild(myd3test());
//export default myd3test();
//TO EXPORT A CONSTANT: module.exports = AconstDECLAREDDIRECTLYJS

/*
var treeNewickString = "(A:0.1,B:0.2,(C:0.3,D:0.4):0.5)";
var example_tree = "(A:0.1,B:0.2,(C:0.3,D:0.4):0.5)";
const height = 900;
const width = 900;

function treedisplay(){
    d3.text(treeNewickString, function(error, newick){
        var tree = d3.layout.phylotree()
            .svg(d3.select("#tree_display"))
            .options({ 
                'left-right-spacing': 'fit-to-size',
                'top-bottom-spacing': 'fit-to-size',
                'selectable': true,
                'zoom':true,
                'right-offset':1, //this fixes the prlm right side, 
                        // but only works in d3version5 and npm
                'left-offset':0,
                'collapsible':false
            }).size([height,width])
            .node_circle_size(2);
        tree(treeNewickString)
            .layout();
    
        $("#layout").on("click", function(e) {
            tree.radial($(this).prop("checked")).placenodes().update();
            });
        });
        hljs.initHighlightingOnLoad();
    };
*/


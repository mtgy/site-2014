/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fond_mer',
            type:'rect',
            rect:['0px','0px','620px','450px','auto','auto'],
            opacity:0.77272727272727,
            fill:["rgba(191,202,207,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'fond_carte',
            type:'image',
            rect:['0px','0px','620px','450px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fond_carte.png",'0px','0px']
         },
         {
            id:'fond_carte_pays',
            type:'image',
            rect:['22px','231px','712px','174px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fond_carte_pays.png",'0px','0px']
         },
         {
            id:'logo_f24',
            type:'image',
            rect:['561px','475px','42px','41px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo_f24.png",'0px','0px']
         },
         {
            id:'legende_petrol',
            type:'rect',
            rect:['22','468','auto','auto','auto','auto'],
            cursor:['default'],
            boxShadow:["",0,0,0,0,"rgba(0,0,0,0)"]
         },
         {
            id:'legend_ura',
            type:'rect',
            rect:['22','496','auto','auto','auto','auto'],
            cursor:['default']
         },
         {
            id:'legend_or',
            type:'rect',
            rect:['22','524','auto','auto','auto','auto'],
            cursor:['default']
         },
         {
            id:'legend_fer',
            type:'rect',
            rect:['22','552','auto','auto','auto','auto'],
            cursor:['default']
         },
         {
            id:'py_tchad',
            type:'rect',
            rect:['357','169','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'py_mali',
            type:'rect',
            rect:['79','149','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'py_mauri',
            type:'rect',
            rect:['25','121','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'py_niger',
            type:'rect',
            rect:['211','168','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'py_soudan',
            type:'rect',
            rect:['450','183','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'or_02',
            type:'image',
            rect:['160px','270px','93px','33px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ressource/or_02.png",'0px','0px']
         },
         {
            id:'intro',
            type:'rect',
            rect:['0px','0px','632px','640px','auto','auto'],
            fill:["rgba(0,0,0,0.75)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'txt_intro',
            type:'text',
            rect:['48px','282px','523px','auto','auto','auto'],
            cursor:['default'],
            text:"Synonyme de pauvreté et misère, la région du Sahel regroupe pourtant d’importantes richesses naturelles telles que le pétrole, le gaz, l’or, l’uranium, le fer, etc. Des réserves qui attisent les convoitises des grandes puissances étrangères, soucieuses de s’y implanter, comme la Chine, les États-Unis, le Canada et la France. Pour certains, l’opération au Mali a aussi pour objectif de sécuriser les approvisionnements au Niger voisin. ",
            align:"left",
            font:['Arial, Helvetica, sans-serif',20,"rgba(255,255,255,1.00)","300","none","normal"]
         },
         {
            id:'titre',
            type:'image',
            rect:['0px','0px','620px','67px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"titre.png",'0px','0px'],
            boxShadow:["",0,9,22,0,"rgba(0,0,0,0.65)"]
         },
         {
            id:'btn_intro',
            type:'rect',
            rect:['-15px','-21px','666px','661px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'close_hide',
            type:'rect',
            rect:['0px','0px','620px','620px','auto','auto'],
            fill:["rgba(134,20,12,0)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'pan_txt',
            display:'none',
            type:'rect',
            rect:['-22','103px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'py_niger',
            symbolName:'py_niger'
         },
         {
            id:'pan_txt',
            symbolName:'pan_txt'
         },
         {
            id:'legende_petrol',
            symbolName:'legende_petrol'
         },
         {
            id:'legend_fer',
            symbolName:'legend_fer'
         },
         {
            id:'py_mauri',
            symbolName:'py_mauri'
         },
         {
            id:'legend_ura',
            symbolName:'legend_ura'
         },
         {
            id:'py_tchad',
            symbolName:'py_tchad'
         },
         {
            id:'legend_or',
            symbolName:'legend_or'
         },
         {
            id:'py_soudan',
            symbolName:'py_soudan'
         },
         {
            id:'py_mali',
            symbolName:'py_mali'
         }
         ]
      },
   states: {
      "Base State": {
         "${_legend_ura}": [
            ["style", "top", '498px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'default']
         ],
         "${_py_mauri}": [
            ["style", "cursor", 'pointer']
         ],
         "${_legend_or}": [
            ["style", "top", '468px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'default'],
            ["style", "left", '339px']
         ],
         "${_legend_fer}": [
            ["style", "top", '496px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'default'],
            ["style", "left", '339px']
         ],
         "${_txt_intro}": [
            ["style", "top", '312px'],
            ["style", "width", '523px'],
            ["style", "left", '48px'],
            ["style", "font-weight", '300'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.38961038961039'],
            ["style", "cursor", 'default'],
            ["style", "font-size", '20px']
         ],
         "${_or_02}": [
            ["style", "left", '160px'],
            ["style", "top", '270px']
         ],
         "${_pan_txt}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0.25973984415584'],
            ["style", "left", '-448px'],
            ["style", "top", '103px']
         ],
         "${_btn_intro}": [
            ["style", "top", '-21.32px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '-15.3px'],
            ["color", "background-color", 'rgba(0,0,0,0.00)']
         ],
         "${_py_tchad}": [
            ["style", "cursor", 'pointer']
         ],
         "${_legende_petrol}": [
            ["style", "top", '470px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'default']
         ],
         "${_fond_carte}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_logo_f24}": [
            ["style", "left", '560.55px'],
            ["style", "top", '475px']
         ],
         "${_close_hide}": [
            ["style", "height", '620px']
         ],
         "${_py_niger}": [
            ["style", "cursor", 'pointer']
         ],
         "${_titre}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65)'],
            ["subproperty", "boxShadow.blur", '22px'],
            ["subproperty", "boxShadow.offsetV", '9px'],
            ["style", "left", '0px'],
            ["subproperty", "boxShadow.offsetH", '0px']
         ],
         "${_py_soudan}": [
            ["style", "cursor", 'pointer']
         ],
         "${_intro}": [
            ["color", "background-color", 'rgba(0,0,0,0.7461)'],
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '640px'],
            ["style", "opacity", '1'],
            ["style", "left", '-1px'],
            ["style", "width", '632px']
         ],
         "${_fond_mer}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["style", "opacity", '0.77272727272727'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(191,202,207,1.00)']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '620px'],
            ["style", "height", '533px'],
            ["style", "overflow", 'hidden']
         ],
         "${_fond_carte_pays}": [
            ["style", "left", '22px'],
            ["style", "top", '231px']
         ],
         "${_py_mali}": [
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
            { id: "eid228", tween: [ "style", "${_intro}", "left", '-1px', { fromValue: '-1px'}], position: 750, duration: 0, easing: "easeInQuad" },
            { id: "eid229", tween: [ "style", "${_intro}", "top", '-73px', { fromValue: '0px'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid210", tween: [ "style", "${_titre}", "top", '180px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInQuad" },
            { id: "eid211", tween: [ "style", "${_titre}", "top", '0px', { fromValue: '180px'}], position: 500, duration: 250, easing: "easeInQuad" },
            { id: "eid232", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '1'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid130", tween: [ "style", "${_pan_txt}", "opacity", '0.91558441558442', { fromValue: '0.25973984415584'}], position: 750, duration: 750, easing: "easeInQuad" },
            { id: "eid129", tween: [ "style", "${_pan_txt}", "left", '11px', { fromValue: '-448px'}], position: 750, duration: 750, easing: "easeInQuad" },
            { id: "eid224", tween: [ "style", "${_txt_intro}", "opacity", '0.85064935064935', { fromValue: '0.38961038961039'}], position: 0, duration: 499 },
            { id: "eid225", tween: [ "style", "${_txt_intro}", "opacity", '0', { fromValue: '0.8506489992141724'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid233", tween: [ "style", "${_pan_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid114", tween: [ "style", "${_pan_txt}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid222", tween: [ "style", "${_txt_intro}", "top", '282px', { fromValue: '312px'}], position: 0, duration: 499 },
            { id: "eid223", tween: [ "style", "${_txt_intro}", "top", '292px', { fromValue: '282px'}], position: 499, duration: 251, easing: "easeInQuad" }         ]
      }
   }
},
"py_soudan": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pays_sou',
      type: 'image',
      rect: ['0px','0px','178px','207px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pays/pays_sou.png','0px','0px']
   },
   {
      rect: ['71px','166px','auto','auto','auto','auto'],
      id: 'txt_pays_sou02',
      text: 'SUD <br>SOUDAN',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['51px','33px','auto','auto','auto','auto'],
      id: 'txt_pays_sou',
      text: 'SOUDAN',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'petrol_01',
      type: 'image',
      rect: ['16px','100px','119px','73px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_01.png','0px','0px']
   },
   {
      id: 'chine',
      type: 'rect',
      rect: ['89','155','auto','auto','auto','auto']
   },
   {
      id: 'invest',
      type: 'rect',
      rect: ['84','113','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'chine',
      symbolName: 'chine'
   },
   {
      id: 'invest',
      symbolName: 'invest'
   }   ]
   },
   states: {
      "Base State": {
         "${_chine}": [
            ["style", "top", '148px'],
            ["style", "opacity", '0'],
            ["style", "left", '130px']
         ],
         "${_petrol_01}": [
            ["style", "top", '100.9px'],
            ["style", "opacity", '1'],
            ["style", "left", '17px']
         ],
         "${_pays_sou}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '207px'],
            ["style", "width", '178px']
         ],
         "${_txt_pays_sou02}": [
            ["style", "top", '170.37px'],
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '63.22px'],
            ["style", "font-size", '12px']
         ],
         "${_txt_pays_sou}": [
            ["style", "top", '34.4px'],
            ["style", "line-height", '12px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '52.23px'],
            ["style", "font-size", '12px']
         ],
         "${_invest}": [
            ["style", "top", '104px'],
            ["style", "opacity", '0'],
            ["style", "left", '124px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid108", tween: [ "style", "${_invest}", "left", '84px', { fromValue: '124px'}], position: 127, duration: 123 },
            { id: "eid24", tween: [ "style", "${_txt_pays_sou02}", "top", '166.4px', { fromValue: '170.37px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid64", tween: [ "style", "${_chine}", "opacity", '1', { fromValue: '0'}], position: 127, duration: 123 },
            { id: "eid60", tween: [ "style", "${_chine}", "top", '148px', { fromValue: '148px'}], position: 0, duration: 0, easing: "easeInOutBounce" },
            { id: "eid30", tween: [ "color", "${_txt_pays_sou02}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid57", tween: [ "style", "${_petrol_01}", "left", '16px', { fromValue: '17px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid8", tween: [ "style", "${_pays_sou}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid20", tween: [ "style", "${_txt_pays_sou}", "left", '51.23px', { fromValue: '52.23px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid29", tween: [ "color", "${_txt_pays_sou}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid11", tween: [ "style", "${_pays_sou}", "top", '-1px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid18", tween: [ "style", "${_txt_pays_sou}", "top", '33.4px', { fromValue: '34.4px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid55", tween: [ "style", "${_petrol_01}", "top", '99.9px', { fromValue: '100.9px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid111", tween: [ "style", "${_invest}", "top", '104px', { fromValue: '104px'}], position: 250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_invest}", "opacity", '1', { fromValue: '0'}], position: 127, duration: 123 },
            { id: "eid26", tween: [ "style", "${_txt_pays_sou02}", "left", '63px', { fromValue: '63.22px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid68", tween: [ "style", "${_chine}", "left", '90px', { fromValue: '130px'}], position: 127, duration: 123 },
            { id: "eid14", tween: [ "style", "${_pays_sou}", "left", '-1px', { fromValue: '0px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid56", tween: [ "style", "${_petrol_01}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" }         ]
      }
   }
},
"py_tchad": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pays_tchad',
      type: 'image',
      rect: ['0px','0px','114px','179px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pays/pays_tchad.png','0px','0px']
   },
   {
      rect: ['36px','90px','auto','auto','auto','auto'],
      id: 'txt_pays_tchad',
      text: 'TCHAD',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'petrol_02',
      type: 'image',
      rect: ['21px','136px','57px','29px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_02.png','0px','0px']
   },
   {
      id: 'us',
      type: 'rect',
      rect: ['105','129','auto','auto','auto','auto']
   },
   {
      id: 'invest2',
      type: 'rect',
      rect: ['130','99','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'us',
      symbolName: 'us'
   },
   {
      id: 'invest2',
      symbolName: 'invest'
   }   ]
   },
   states: {
      "Base State": {
         "${_txt_pays_tchad}": [
            ["style", "top", '91px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '36.8px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '179px'],
            ["style", "width", '114px']
         ],
         "${_us}": [
            ["style", "top", '188px'],
            ["style", "opacity", '0'],
            ["style", "left", '107.93px']
         ],
         "${_pays_tchad}": [
            ["style", "top", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px']
         ],
         "${_petrol_02}": [
            ["style", "left", '21px'],
            ["style", "top", '136.49px']
         ],
         "${_invest2}": [
            ["style", "top", '145px'],
            ["style", "opacity", '0'],
            ["style", "left", '105px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid32", tween: [ "style", "${_pays_tchad}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid35", tween: [ "style", "${_txt_pays_tchad}", "left", '35.8px', { fromValue: '36.8px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid170", tween: [ "style", "${_invest2}", "left", '45px', { fromValue: '105px'}], position: 125, duration: 125 },
            { id: "eid31", tween: [ "style", "${_pays_tchad}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid147", tween: [ "style", "${_us}", "top", '188px', { fromValue: '188px'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_invest2}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid36", tween: [ "style", "${_txt_pays_tchad}", "top", '90px', { fromValue: '91px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid33", tween: [ "style", "${_pays_tchad}", "left", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid168", tween: [ "style", "${_us}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid172", tween: [ "style", "${_us}", "left", '47.97px', { fromValue: '107.93px'}], position: 125, duration: 125 },
            { id: "eid34", tween: [ "color", "${_txt_pays_tchad}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid143", tween: [ "style", "${_invest2}", "top", '145px', { fromValue: '145px'}], position: 0, duration: 0 }         ]
      }
   }
},
"py_niger": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pays_niger',
      type: 'image',
      rect: ['0px','0px','171px','134px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pays/pays_niger.png','0px','0px']
   },
   {
      rect: ['111px','26px','auto','auto','auto','auto'],
      id: 'txt_pays_niger',
      text: 'NIGER',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'petrol_03Copy',
      type: 'image',
      rect: ['103px','51px','61px','68px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_03.png','0px','0px']
   },
   {
      id: 'petrol_04Copy',
      type: 'image',
      rect: ['30px','43px','43px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_04.png','0px','0px']
   },
   {
      id: 'ura_01Copy',
      type: 'image',
      rect: ['72px','20px','26px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/ura_01.png','0px','0px']
   },
   {
      id: 'chine_1',
      type: 'rect',
      rect: ['56px','189px','auto','auto','auto','auto']
   },
   {
      id: 'core',
      type: 'rect',
      rect: ['121','189','auto','auto','auto','auto']
   },
   {
      id: 'fra',
      type: 'rect',
      rect: ['111','217','auto','auto','auto','auto']
   },
   {
      id: 'invest2',
      type: 'rect',
      rect: ['130','99','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'core',
      symbolName: 'core'
   },
   {
      id: 'invest2',
      symbolName: 'invest'
   },
   {
      id: 'chine_1',
      symbolName: 'chine_1'
   },
   {
      id: 'fra',
      symbolName: 'fra'
   }   ]
   },
   states: {
      "Base State": {
         "${_chine_1}": [
            ["style", "top", '189px'],
            ["style", "opacity", '0'],
            ["style", "left", '129px']
         ],
         "${_fra}": [
            ["style", "top", '218.42px'],
            ["style", "opacity", '0'],
            ["style", "left", '129px']
         ],
         "${_petrol_03Copy}": [
            ["style", "top", '52px'],
            ["style", "opacity", '1'],
            ["style", "left", '104.3px']
         ],
         "${_pays_niger}": [
            ["style", "top", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px']
         ],
         "${_core}": [
            ["style", "top", '160.3px'],
            ["style", "opacity", '0'],
            ["style", "left", '96px']
         ],
         "${_invest2}": [
            ["style", "top", '117px'],
            ["style", "opacity", '0'],
            ["style", "left", '125px']
         ],
         "${_txt_pays_niger}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '27px'],
            ["style", "left", '112px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '134px'],
            ["style", "width", '171px']
         ],
         "${_ura_01Copy}": [
            ["style", "top", '21px'],
            ["style", "opacity", '1'],
            ["style", "left", '73.3px']
         ],
         "${_petrol_04Copy}": [
            ["style", "top", '44px'],
            ["style", "opacity", '1'],
            ["style", "left", '31.32px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid276", tween: [ "style", "${_fra}", "left", '56px', { fromValue: '129px'}], position: 125, duration: 125 },
            { id: "eid270", tween: [ "style", "${_core}", "top", '160.3px', { fromValue: '160.3px'}], position: 250, duration: 0 },
            { id: "eid244", tween: [ "style", "${_petrol_03Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid279", tween: [ "style", "${_core}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid298", tween: [ "style", "${_chine_1}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid297", tween: [ "style", "${_chine_1}", "left", '56px', { fromValue: '129px'}], position: 125, duration: 125 },
            { id: "eid42", tween: [ "style", "${_txt_pays_niger}", "top", '26px', { fromValue: '27px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid41", tween: [ "style", "${_txt_pays_niger}", "left", '111px', { fromValue: '112px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid277", tween: [ "style", "${_fra}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid37", tween: [ "style", "${_pays_niger}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid267", tween: [ "style", "${_fra}", "top", '218.42px', { fromValue: '218.42px'}], position: 250, duration: 0 },
            { id: "eid249", tween: [ "style", "${_ura_01Copy}", "left", '72.3px', { fromValue: '73.3px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid275", tween: [ "style", "${_invest2}", "top", '117px', { fromValue: '117px'}], position: 250, duration: 0 },
            { id: "eid278", tween: [ "style", "${_core}", "left", '23px', { fromValue: '96px'}], position: 125, duration: 125 },
            { id: "eid247", tween: [ "style", "${_petrol_03Copy}", "left", '103.3px', { fromValue: '104.3px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid40", tween: [ "color", "${_txt_pays_niger}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid241", tween: [ "style", "${_petrol_03Copy}", "top", '51px', { fromValue: '52px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid245", tween: [ "style", "${_petrol_04Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid248", tween: [ "style", "${_petrol_04Copy}", "left", '30.32px', { fromValue: '31.32px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid38", tween: [ "style", "${_pays_niger}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid243", tween: [ "style", "${_ura_01Copy}", "top", '20px', { fromValue: '21px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid246", tween: [ "style", "${_ura_01Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid252", tween: [ "style", "${_invest2}", "left", '52px', { fromValue: '125px'}], position: 125, duration: 125 },
            { id: "eid251", tween: [ "style", "${_invest2}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid242", tween: [ "style", "${_petrol_04Copy}", "top", '43px', { fromValue: '44px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid39", tween: [ "style", "${_pays_niger}", "left", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" }         ]
      }
   }
},
"py_mali": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pays_mali',
      type: 'image',
      rect: ['0px','0px','180px','169px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pays/pays_mali.png','0px','0px']
   },
   {
      rect: ['82px','79px','auto','auto','auto','auto'],
      id: 'txt_pays_mali',
      text: 'MALI',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'petrol_05Copy',
      type: 'image',
      rect: ['44px','16px','77px','46px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_05.png','0px','0px']
   },
   {
      id: 'petrol_06Copy',
      type: 'image',
      rect: ['60px','97px','75px','38px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_06.png','0px','0px']
   },
   {
      id: 'ura_02Copy',
      type: 'image',
      rect: ['140px','53px','13px','25px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/ura_02.png','0px','0px']
   },
   {
      id: 'or_01Copy',
      type: 'image',
      rect: ['-3px','113px','67px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/or_01.png','0px','0px']
   },
   {
      id: 'invest2Copy',
      type: 'rect',
      rect: ['130','99','auto','auto','auto','auto']
   },
   {
      id: 'fra_1',
      type: 'rect',
      rect: ['65px','221px','auto','auto','auto','auto']
   },
   {
      id: 'ita',
      type: 'rect',
      rect: ['65px','192px','auto','auto','auto','auto']
   },
   {
      id: 'alger',
      type: 'rect',
      rect: ['65px','163px','auto','auto','auto','auto']
   },
   {
      id: 'canada',
      type: 'rect',
      rect: ['65px','250px','auto','auto','auto','auto']
   },
   {
      id: 'australie',
      type: 'rect',
      rect: ['65px','280px','auto','auto','auto','auto']
   },
   {
      id: 'afri_sud',
      type: 'rect',
      rect: ['65px','309px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'afri_sud',
      symbolName: 'afri_sud'
   },
   {
      id: 'australie',
      symbolName: 'australie'
   },
   {
      id: 'fra_1',
      symbolName: 'fra_1'
   },
   {
      id: 'ita',
      symbolName: 'ita'
   },
   {
      id: 'alger',
      symbolName: 'alger'
   },
   {
      id: 'invest2Copy',
      symbolName: 'invest'
   },
   {
      id: 'canada',
      symbolName: 'canada'
   }   ]
   },
   states: {
      "Base State": {
         "${_or_01Copy}": [
            ["style", "top", '114px'],
            ["style", "opacity", '1'],
            ["style", "left", '-2px']
         ],
         "${_pays_mali}": [
            ["style", "top", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px']
         ],
         "${_afri_sud}": [
            ["style", "top", '309.47px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_txt_pays_mali}": [
            ["style", "top", '80px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '82.48px'],
            ["style", "font-size", '12px']
         ],
         "${_australie}": [
            ["style", "top", '279.87px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_fra_1}": [
            ["style", "top", '221px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_petrol_05Copy}": [
            ["style", "top", '17px'],
            ["style", "opacity", '1'],
            ["style", "left", '45px']
         ],
         "${_canada}": [
            ["style", "top", '250.42px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_ura_02Copy}": [
            ["style", "top", '54px'],
            ["style", "opacity", '1'],
            ["style", "left", '141px']
         ],
         "${symbolSelector}": [
            ["style", "height", '169px'],
            ["style", "width", '180px']
         ],
         "${_ita}": [
            ["style", "top", '192px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_invest2Copy}": [
            ["style", "top", '119px'],
            ["style", "opacity", '0'],
            ["style", "left", '125px']
         ],
         "${_alger}": [
            ["style", "top", '163.05px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_petrol_06Copy}": [
            ["style", "top", '98px'],
            ["style", "opacity", '1'],
            ["style", "left", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid310", tween: [ "style", "${_afri_sud}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid46", tween: [ "color", "${_txt_pays_mali}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid282", tween: [ "style", "${_petrol_05Copy}", "top", '16px', { fromValue: '17px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid307", tween: [ "style", "${_alger}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid289", tween: [ "style", "${_or_01Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid283", tween: [ "style", "${_petrol_06Copy}", "top", '97px', { fromValue: '98px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid302", tween: [ "style", "${_canada}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid43", tween: [ "style", "${_pays_mali}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid305", tween: [ "style", "${_fra_1}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid299", tween: [ "style", "${_fra_1}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid309", tween: [ "style", "${_australie}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid44", tween: [ "style", "${_pays_mali}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid45", tween: [ "style", "${_pays_mali}", "left", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid288", tween: [ "style", "${_ura_02Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid290", tween: [ "style", "${_petrol_05Copy}", "left", '44px', { fromValue: '45px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid304", tween: [ "style", "${_afri_sud}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid296", tween: [ "style", "${_invest2Copy}", "left", '62px', { fromValue: '125px'}], position: 125, duration: 125 },
            { id: "eid300", tween: [ "style", "${_ita}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid293", tween: [ "style", "${_or_01Copy}", "left", '-3px', { fromValue: '-2px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid294", tween: [ "style", "${_invest2Copy}", "top", '119px', { fromValue: '119px'}], position: 250, duration: 0 },
            { id: "eid306", tween: [ "style", "${_ita}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid292", tween: [ "style", "${_ura_02Copy}", "left", '140px', { fromValue: '141px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid286", tween: [ "style", "${_petrol_05Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid295", tween: [ "style", "${_invest2Copy}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid308", tween: [ "style", "${_canada}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid48", tween: [ "style", "${_txt_pays_mali}", "top", '79px', { fromValue: '80px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid47", tween: [ "style", "${_txt_pays_mali}", "left", '81.48px', { fromValue: '82.48px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid285", tween: [ "style", "${_or_01Copy}", "top", '113px', { fromValue: '114px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid287", tween: [ "style", "${_petrol_06Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid303", tween: [ "style", "${_australie}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid301", tween: [ "style", "${_alger}", "left", '65px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid291", tween: [ "style", "${_petrol_06Copy}", "left", '60px', { fromValue: '61px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid284", tween: [ "style", "${_ura_02Copy}", "top", '53px', { fromValue: '54px'}], position: 0, duration: 250, easing: "easeInOutBounce" }         ]
      }
   }
},
"py_mauri": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pays_mauri',
      type: 'image',
      rect: ['0px','0px','135px','145px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pays/pays_mauri.png','0px','0px']
   },
   {
      rect: ['24px','96px','auto','auto','auto','auto'],
      id: 'txt_pays_mauri',
      text: 'MAURITANIE',
      font: ['Arial, Helvetica, sans-serif',12,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      id: 'petrol_07Copy',
      type: 'image',
      rect: ['-15px','83px','11px','42px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/petrol_07.png','0px','0px']
   },
   {
      id: 'fer_01Copy',
      type: 'image',
      rect: ['23px','6px','81px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/ressource/fer_01.png','0px','0px']
   },
   {
      id: 'invest2Copy2',
      type: 'rect',
      rect: ['130','99','auto','auto','auto','auto']
   },
   {
      id: 'australie_1',
      type: 'rect',
      rect: ['65px','183px','auto','auto','auto','auto']
   },
   {
      id: 'fra_2',
      type: 'rect',
      rect: ['65px','214px','auto','auto','auto','auto']
   },
   {
      id: 'ru',
      type: 'rect',
      rect: ['65px','244px','auto','auto','auto','auto']
   },
   {
      id: 'suiss',
      type: 'rect',
      rect: ['65px','275px','auto','auto','auto','auto']
   },
   {
      id: 'canada_1',
      type: 'rect',
      rect: ['65px','304px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'ru',
      symbolName: 'ru'
   },
   {
      id: 'invest2Copy2',
      symbolName: 'invest'
   },
   {
      id: 'fra_2',
      symbolName: 'fra_2'
   },
   {
      id: 'canada_1',
      symbolName: 'canada_1'
   },
   {
      id: 'suiss',
      symbolName: 'suiss'
   },
   {
      id: 'australie_1',
      symbolName: 'australie_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_petrol_07Copy}": [
            ["style", "top", '84px'],
            ["style", "opacity", '1'],
            ["style", "left", '-13.93px']
         ],
         "${_pays_mauri}": [
            ["style", "top", '1px'],
            ["style", "opacity", '1'],
            ["style", "left", '1px']
         ],
         "${_txt_pays_mauri}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "top", '97px'],
            ["style", "left", '25px'],
            ["style", "font-size", '12px']
         ],
         "${_canada_1}": [
            ["style", "top", '304.12px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_invest2Copy2}": [
            ["style", "top", '139px'],
            ["style", "opacity", '0'],
            ["style", "left", '125px']
         ],
         "${_suiss}": [
            ["style", "top", '274.53px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${symbolSelector}": [
            ["style", "height", '145px'],
            ["style", "width", '135px']
         ],
         "${_ru}": [
            ["style", "top", '244.3px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_fer_01Copy}": [
            ["style", "top", '7px'],
            ["style", "opacity", '1'],
            ["style", "left", '24px']
         ],
         "${_fra_2}": [
            ["style", "top", '214.17px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ],
         "${_australie_1}": [
            ["style", "top", '183px'],
            ["style", "opacity", '0'],
            ["style", "left", '128px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid321", tween: [ "style", "${_fer_01Copy}", "top", '6px', { fromValue: '7px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid325", tween: [ "style", "${_fer_01Copy}", "left", '23px', { fromValue: '24px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid53", tween: [ "style", "${_txt_pays_mauri}", "left", '24px', { fromValue: '25px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid327", tween: [ "style", "${_fra_2}", "left", '25px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid330", tween: [ "style", "${_canada_1}", "left", '25px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid324", tween: [ "style", "${_petrol_07Copy}", "left", '-14.93px', { fromValue: '-13.93px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid335", tween: [ "style", "${_canada_1}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid312", tween: [ "style", "${_invest2Copy2}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid334", tween: [ "style", "${_suiss}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid326", tween: [ "style", "${_australie_1}", "left", '25px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid328", tween: [ "style", "${_ru}", "left", '25px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid323", tween: [ "style", "${_fer_01Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid313", tween: [ "style", "${_invest2Copy2}", "left", '22px', { fromValue: '125px'}], position: 125, duration: 125 },
            { id: "eid333", tween: [ "style", "${_ru}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid332", tween: [ "style", "${_fra_2}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid322", tween: [ "style", "${_petrol_07Copy}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid52", tween: [ "color", "${_txt_pays_mauri}", "color", 'rgba(65,70,72,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid331", tween: [ "style", "${_australie_1}", "opacity", '1', { fromValue: '0'}], position: 125, duration: 125 },
            { id: "eid311", tween: [ "style", "${_invest2Copy2}", "top", '139px', { fromValue: '139px'}], position: 250, duration: 0 },
            { id: "eid49", tween: [ "style", "${_pays_mauri}", "top", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid50", tween: [ "style", "${_pays_mauri}", "opacity", '0.5', { fromValue: '1'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid329", tween: [ "style", "${_suiss}", "left", '25px', { fromValue: '128px'}], position: 125, duration: 125 },
            { id: "eid51", tween: [ "style", "${_pays_mauri}", "left", '0px', { fromValue: '1px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid320", tween: [ "style", "${_petrol_07Copy}", "top", '83px', { fromValue: '84px'}], position: 0, duration: 250, easing: "easeInOutBounce" },
            { id: "eid54", tween: [ "style", "${_txt_pays_mauri}", "top", '96px', { fromValue: '97px'}], position: 0, duration: 250, easing: "easeInOutBounce" }         ]
      }
   }
},
"chine": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['29px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'Chine',
      align: 'left',
      type: 'text'
   },
   {
      id: 'ch_on2',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/ch_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ch_on2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '29px'],
            ["style", "width", '34.5px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"pan_txt": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','459px','346px','auto','auto'],
      boxShadow: ['',5,5,22,0,'rgba(0,0,0,0.45)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_txt',
      opacity: 0.91558441558442,
      type: 'rect',
      fill: ['rgba(236,236,233,1.00)']
   },
   {
      rect: ['0px','0px','460px','41px','auto','auto'],
      boxShadow: ['',0,6,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 1,
      type: 'rect',
      fill: ['rgba(134,20,12,1.00)']
   },
   {
      rect: ['28px','7px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,188,6,1.00)','500','none','normal'],
      align: 'left',
      id: 'Text',
      text: 'Soudan et Sud-Soudan',
      cursor: ['default'],
      type: 'text'
   },
   {
      rect: ['21px','52px','421px','295px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(110,103,103,1.00)','normal','none','normal'],
      align: 'left',
      id: 'texte',
      text: 'Les deux pays détiennent les cinquièmes réserves de pétrole en Afrique, sauf que le Sud détient près des trois quarts des champs pétrolifères, et le Nord toutes les infrastructures. Sans accord clair, le Sud-Soudan et le Soudan n’ont pas d’autres choix que de s’entendre. Avant la partition du pays, le Soudan était le sixième exportateur de brut du continent avec près de 500 000 barils par jour. La China National Petroleum Company (CNPC) est le plus gros investisseur étranger du pays, avec quelque 5 milliards de dollars dans le développement de champs pétroliers. Elle possède 50 % d’une raffinerie de pétrole, près de Khartoum, en partage avec le gouvernement soudanais.',
      cursor: ['default'],
      type: 'text'
   },
   {
      id: 'close_btn',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['425','27','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'close_btn',
      symbolName: 'close_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(134,20,12,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '1'],
            ["style", "left", '0.02px'],
            ["style", "width", '459.53331480635px'],
            ["style", "top", '0.02px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '40.983333587646px'],
            ["subproperty", "boxShadow.offsetV", '6px'],
            ["subproperty", "boxShadow.offsetH", '0px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,188,6,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '28px'],
            ["style", "font-size", '24px'],
            ["style", "top", '7px'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'block'],
            ["style", "cursor", 'default'],
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '450px'],
            ["style", "width", '459px']
         ],
         "${_texte}": [
            ["color", "color", 'rgba(110,103,103,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '21.37px'],
            ["style", "font-size", '16px'],
            ["style", "top", '51.75px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '294.66665649414px'],
            ["style", "width", '421.27270507813px'],
            ["style", "cursor", 'default'],
            ["style", "display", 'block']
         ],
         "${_fond_txt}": [
            ["color", "background-color", 'rgba(236,236,233,1.00)'],
            ["subproperty", "boxShadow.blur", '22px'],
            ["style", "opacity", '0.91558441558442'],
            ["style", "left", '-0.02px'],
            ["style", "top", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '346px'],
            ["subproperty", "boxShadow.offsetV", '5px'],
            ["subproperty", "boxShadow.offsetH", '5px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.45)']
         ],
         "${_close_btn}": [
            ["style", "top", '21px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '440px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid75", tween: [ "style", "${_close_btn}", "top", '21px', { fromValue: '21px'}], position: 0, duration: 0, easing: "easeInOutBounce" }         ]
      }
   }
},
"close_btn": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-10px','-10px','24px','20px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(134,20,12,1)']
   },
   {
      rect: ['-5px','-10px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','900','none','normal'],
      id: 'txt_close_btn',
      text: 'X',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle3}": [
            ["style", "left", '-10.3px'],
            ["style", "opacity", '0']
         ],
         "${_txt_close_btn}": [
            ["style", "top", '-10px'],
            ["style", "font-weight", '900'],
            ["style", "left", '-5px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '11px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: true,
         timeline: [
            { id: "eid74", tween: [ "color", "${_txt_close_btn}", "color", 'rgba(0,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 250, easing: "easeInOutBounce" }         ]
      }
   }
},
"invest": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-9px','0px','94px','38px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)'],
      type: 'rect',
      id: 'fond_dra',
      stroke: [0,'rgb(0, 0, 0)','none'],
      opacity: 0.81168831168831,
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      text: 'Pays investisseurs',
      id: 'Text4',
      opacity: 0.85064935064935,
      align: 'left',
      rect: ['-4px','4px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '27.5px'],
            ["style", "width", '84.550003051758px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.246094)'],
            ["style", "opacity", '0.8116883039474487'],
            ["style", "left", '-9.2px'],
            ["style", "width", '93.750015258789px'],
            ["style", "top", '0px'],
            ["style", "height", '37.900001525879px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text4}": [
            ["style", "top", '4px'],
            ["style", "line-height", '14px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.85064935064935'],
            ["style", "left", '-4px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"us": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['29px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'USA',
      align: 'left',
      type: 'text'
   },
   {
      id: 'us_on',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/us_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '29px'],
            ["style", "width", '34.5px']
         ],
         "${_Rectangle11}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_us_on}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"intro": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','632px','619px','auto','auto'],
      id: 'intro',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,0.75)']
   },
   {
      rect: ['48px','282px','523px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','500','none','normal'],
      align: 'left',
      id: 'Text',
      text: 'Synonyme de pauvreté et misère, la région du Sahel regroupe pourtant d’importantes richesses naturelles telles que le pétrole, le gaz, l’or, l’uranium, le fer, etc. Des réserves qui attisent les convoitises des grandes puissances étrangères, soucieuses de s’y implanter, comme la Chine, les États-Unis, le Canada et la France. Pour certains, l’opération au Mali a aussi pour objectif de sécuriser les approvisionnements au Niger voisin. ',
      cursor: ['default'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_intro}": [
            ["color", "background-color", 'rgba(0,0,0,0.75)'],
            ["transform", "scaleX", '1'],
            ["style", "top", '0px'],
            ["style", "height", '619px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '632px']
         ],
         "${_Text}": [
            ["style", "top", '312px'],
            ["style", "cursor", 'default'],
            ["style", "opacity", '0.38961038961039'],
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '48px'],
            ["style", "width", '523px']
         ],
         "${symbolSelector}": [
            ["style", "height", '619px'],
            ["style", "width", '632px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid204", tween: [ "style", "${_intro}", "top", '-550px', { fromValue: '0px'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid207", tween: [ "style", "${_intro}", "opacity", '0.31168831168831', { fromValue: '1'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid179", tween: [ "style", "${_Text}", "opacity", '0.85064935064935', { fromValue: '0.38961038961039'}], position: 0, duration: 499 },
            { id: "eid214", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '0.8506489992141724'}], position: 499, duration: 251, easing: "easeInQuad" },
            { id: "eid188", tween: [ "transform", "${_intro}", "scaleX", '1', { fromValue: '1'}], position: 500, duration: 0, easing: "easeInQuad" },
            { id: "eid178", tween: [ "style", "${_Text}", "top", '282px', { fromValue: '312px'}], position: 0, duration: 499 },
            { id: "eid216", tween: [ "style", "${_Text}", "top", '242px', { fromValue: '282px'}], position: 499, duration: 251, easing: "easeInQuad" }         ]
      }
   }
},
"legend_fer": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','35px','20px','auto','auto'],
      fill: ['rgba(105,105,101,1.00)'],
      id: 'fer',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,2,0,'rgba(0,0,0,0.24)']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(105,105,101,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Gisement de fer',
      align: 'center',
      rect: ['47px','2px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fer}": [
            ["color", "background-color", 'rgba(105,105,101,1.00)'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '2px'],
            ["style", "left", '0px'],
            ["style", "height", '20px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)']
         ],
         "${_Text5}": [
            ["style", "top", '2px'],
            ["color", "color", 'rgba(105,105,101,1.00)'],
            ["style", "left", '47px'],
            ["style", "width", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '138px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"legend_or": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','35px','20px','auto','auto'],
      fill: ['rgba(251,219,0,1.00)'],
      id: 'or',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      boxShadow: ['',2,2,2,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(105,105,101,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Gisement d\'or',
      align: 'center',
      rect: ['47px','1px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(105,105,101,1.00)'],
            ["style", "left", '47px'],
            ["style", "width", 'auto']
         ],
         "${_or}": [
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '2px'],
            ["style", "left", '0px'],
            ["style", "height", '20px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.30)']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '126px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"legend_ura": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      fill: ['rgba(151,167,10,1.00)'],
      rect: ['0px','0px','35px','20px','auto','auto'],
      id: 'uranuium',
      stroke: [0,'rgb(0, 0, 0)','none'],
      cursor: ['default'],
      boxShadow: ['',2,2,2,0,'rgba(0,0,0,0.30)']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(105,105,101,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'Gisement d\'uranium',
      align: 'center',
      rect: ['47px','2px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '2px'],
            ["color", "color", 'rgba(105,105,101,1.00)'],
            ["style", "left", '47px'],
            ["style", "width", 'auto']
         ],
         "${_uranuium}": [
            ["color", "background-color", 'rgba(151,167,10,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.30)'],
            ["style", "left", '0px'],
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '2px'],
            ["style", "height", '20px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["style", "cursor", 'default']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '161px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"legende_petrol": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','35px','20px','auto','auto'],
      boxShadow: ['',2,2,2,0,'rgba(0,0,0,0.24)'],
      id: 'petrole',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1)']
   },
   {
      rect: ['47px','2px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(105,105,101,1.00)','400','none','normal'],
      id: 'Text2',
      text: 'Gisement de pétrole et de gaz',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_petrole}": [
            ["style", "top", '0px'],
            ["subproperty", "boxShadow.blur", '2px'],
            ["style", "left", '0px'],
            ["style", "height", '20px'],
            ["subproperty", "boxShadow.offsetV", '2px'],
            ["subproperty", "boxShadow.offsetH", '2px'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.24)']
         ],
         "${_Text2}": [
            ["style", "top", '2px'],
            ["style", "font-size", '13px'],
            ["style", "font-weight", '400'],
            ["style", "bottom", 'auto'],
            ["color", "color", 'rgba(105,105,101,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '47px'],
            ["style", "width", 'auto']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '219px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"core": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-14px','-5px','128px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['22px','1px','85px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Corée du sud',
      align: 'left',
      type: 'text'
   },
   {
      id: 'cs_on',
      type: 'image',
      rect: ['-7px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/cs_on.png','0px','0px']
   },
   {
      rect: ['100px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cs_on}": [
            ["style", "left", '-7px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11Copy2}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "left", '100.02px'],
            ["style", "width", '10px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '22px'],
            ["style", "width", '84.550003051758px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-13.83px'],
            ["style", "width", '128.29844665527px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fra": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(151,167,10,1.00)']
   },
   {
      rect: ['27px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'France',
      align: 'left',
      type: 'text'
   },
   {
      id: 'fra_on',
      type: 'image',
      rect: ['0','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/fra_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(151,167,10,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_fra_on}": [
            ["style", "top", '0px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '27px'],
            ["style", "width", '34.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"chine_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['67px','-2px','10px','10px','auto','auto'],
      id: 'Rectangle11',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['67px','10px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(151,167,10,1.00)']
   },
   {
      rect: ['29px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'Chine',
      align: 'left',
      type: 'text'
   },
   {
      id: 'ch_on2',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/ch_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ch_on2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11}": [
            ["style", "top", '-2px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '29px'],
            ["style", "width", '34.5px']
         ],
         "${_Rectangle11Copy}": [
            ["style", "top", '10px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(151,167,10,1.00)'],
            ["style", "left", '67px'],
            ["style", "width", '10.016675544507px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fra_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','-2px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['67px','11px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,219,0,1.00)']
   },
   {
      rect: ['27px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'France',
      align: 'left',
      type: 'text'
   },
   {
      id: 'fra_on',
      type: 'image',
      rect: ['0','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/fra_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle11Copy4}": [
            ["style", "top", '11px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "left", '67px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_fra_on}": [
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '27px'],
            ["style", "width", '34.5px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '-2px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ita": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['27px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Italie',
      align: 'left',
      type: 'text'
   },
   {
      id: 'it_on',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/it_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_it_on}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '27px'],
            ["style", "width", '34.5px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"alger": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['27px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Algérie',
      align: 'left',
      type: 'text'
   },
   {
      id: 'al_on',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/al_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_al_on}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '27px'],
            ["style", "width", '34.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"canada": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-15px','-5px','96px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','-3px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['67px','10px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,219,0,1.00)']
   },
   {
      rect: ['18px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Canada',
      align: 'left',
      type: 'text'
   },
   {
      id: 'ca_on',
      type: 'image',
      rect: ['-9px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/ca_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle11Copy5}": [
            ["style", "top", '10px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "left", '67px'],
            ["style", "width", '10px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '18px'],
            ["style", "width", '34.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_ca_on}": [
            ["style", "left", '-9px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '-3px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-15.15px'],
            ["style", "width", '95.70149230957px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"australie": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-19px','-5px','100px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,219,0,1.00)']
   },
   {
      rect: ['14px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Australie',
      align: 'left',
      type: 'text'
   },
   {
      id: 'aus_on',
      type: 'image',
      rect: ['-13px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/aus_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_aus_on}": [
            ["style", "left", '-13px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-19px'],
            ["style", "width", '99.70149230957px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '14px'],
            ["style", "width", '34.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"afri_sud": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-50px','-5px','131px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,219,0,1.00)']
   },
   {
      rect: ['-18px','1px','85px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Afrique du sud',
      align: 'left',
      type: 'text'
   },
   {
      id: 'af_on',
      type: 'image',
      rect: ['-45px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/af_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_af_on}": [
            ["style", "left", '-45px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-50.05px'],
            ["style", "width", '130.61061096191px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '-18px'],
            ["style", "width", '84.550003051758px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"australie_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-19px','-5px','100px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['14px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Australie',
      align: 'left',
      type: 'text'
   },
   {
      id: 'aus_on',
      type: 'image',
      rect: ['-13px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/aus_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '14px'],
            ["style", "width", '34.5px']
         ],
         "${_aus_on}": [
            ["style", "left", '-13px'],
            ["style", "top", '0px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-19px'],
            ["style", "width", '99.70149230957px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"fra_2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['27px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'France',
      align: 'left',
      type: 'text'
   },
   {
      id: 'fra_on',
      type: 'image',
      rect: ['0','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/fra_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_fra_on}": [
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '27px'],
            ["style", "width", '34.5px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ru": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-47px','-5px','128px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['65px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['-16px','1px','80px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Royaume-Uni',
      align: 'left',
      type: 'text'
   },
   {
      id: 'ang_on',
      type: 'image',
      rect: ['-43px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/ang_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_ang_on}": [
            ["style", "left", '-43px'],
            ["style", "top", '0px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-47px'],
            ["style", "width", '127.56362915039px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '18px'],
            ["style", "left", '-16px'],
            ["style", "width", '80.000007398201px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '65.02px'],
            ["style", "width", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"suiss": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-4px','-5px','85px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','4px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(105,105,101,1.00)']
   },
   {
      rect: ['26px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Suisse',
      align: 'left',
      type: 'text'
   },
   {
      id: 'sui_on',
      type: 'image',
      rect: ['0px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/sui_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sui_on}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle11Copy3}": [
            ["style", "top", '4px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(105,105,101,1.00)'],
            ["style", "left", '67.02px'],
            ["style", "width", '10px']
         ],
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-4px'],
            ["style", "width", '84.557739257812px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '34.5px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"canada_1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-15px','-5px','96px','28px','auto','auto'],
      boxShadow: ['',3,3,3,0,'rgba(0,0,0,0.25)'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'fond_dra',
      opacity: 0.81168831168831,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['67px','5px','10px','10px','auto','auto'],
      id: 'Rectangle11Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(251,219,0,1.00)']
   },
   {
      rect: ['18px','1px','35px','18px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Canada',
      align: 'left',
      type: 'text'
   },
   {
      id: 'ca_on',
      type: 'image',
      rect: ['-9px','0px','25px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/drap/on/ca_on.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_fond_dra}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.25)'],
            ["style", "opacity", '0.81168831168831'],
            ["style", "left", '-15.15px'],
            ["style", "width", '95.70149230957px'],
            ["style", "top", '-5px'],
            ["style", "height", '27.5px'],
            ["subproperty", "boxShadow.offsetV", '3px'],
            ["subproperty", "boxShadow.offsetH", '3px'],
            ["subproperty", "boxShadow.blur", '3px']
         ],
         "${_Rectangle11Copy5}": [
            ["style", "top", '5px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(251,219,0,1.00)'],
            ["style", "left", '67px'],
            ["style", "width", '10px']
         ],
         "${_ca_on}": [
            ["style", "left", '-9px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '1px'],
            ["style", "height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '18px'],
            ["style", "width", '34.5px']
         ],
         "${symbolSelector}": [
            ["style", "height", '19px'],
            ["style", "width", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-18219903");

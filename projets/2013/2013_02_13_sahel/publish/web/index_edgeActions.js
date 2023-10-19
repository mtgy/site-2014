
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){$("#Stage").css("background-image","url(back.jpg)","background-repeat","repeat")
$("#Stage").css("-moz-user-select","none")
$("#Stage").css("-webkit-user-select","none")
$("#Stage").css("-ms-user-select","none")
Symbol.bindElementAction(compId,symbolName,"${_py_soudan}","mouseleave",function(sym,e){sym.getComposition().getStage().getSymbol("py_soudan").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_soudan}","mouseenter",function(sym,e){sym.getComposition().getStage().getSymbol("py_soudan").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_soudan}","click",function(sym,e){sym.play(751);sym.getSymbol("pan_txt").$("texte").html("Les deux pays détiennent les cinquièmes réserves de pétrole en Afrique, sauf que le Sud détient près des trois quarts des champs pétrolifères, et le Nord toutes les infrastructures. Sans accord clair, le Sud-Soudan et le Soudan n’ont pas d’autres choix que de s’entendre. Avant la partition du pays, le Soudan était le sixième exportateur de brut du continent avec près de 500 000 barils par jour. La China National Petroleum Company (CNPC) est le plus gros investisseur étranger du pays, avec quelque 5 milliards de dollars dans le développement de champs pétroliers. Elle possède 50 % d’une raffinerie de pétrole, près de Khartoum, en partage avec le gouvernement soudanais.");sym.getSymbol("pan_txt").$("Text").html("Soudan et Sud-Soudan");sym.getSymbol("pan_txt").$("fond_txt").css('height','325px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_tchad}","mouseenter",function(sym,e){sym.getComposition().getStage().getSymbol("py_tchad").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_tchad}","mouseleave",function(sym,e){sym.getComposition().getStage().getSymbol("py_tchad").playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();sym.$("close_hide").hide();sym.$("btn_intro").hide();sym.$("txt_intro").hide();sym.$("intro").hide();sym.$("py_mauri").show();sym.$("py_mali").show();sym.$("py_niger").show();sym.$("py_soudan").show();sym.$("py_tchad").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.stop();sym.$("close_hide").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_tchad}","click",function(sym,e){sym.play(751);sym.getSymbol("pan_txt").$("texte").html("Depuis dix ans, le pays est devenu un pays exportateur de pétrole, avec des réserves certifiées de 1,5 milliard de barils concentrés autour de trois principaux gisements de Doba-Komé, Miandoum et Bolobo. L’exploitation revient principalement aux Américains via le consortium ExxonMobil, Chevron (États-Unis) et Petronas (Malaisie). La Chine, qui depuis plusieurs années cherche à sécuriser son approvisionnement en matière de ressources naturelles, est également bien implantée dans les secteurs pétrolier et gazier malgré une mésentente avec les autorités tchadiennes sur les prix.");sym.getSymbol("pan_txt").$("Text").html("Tchad");sym.getSymbol("pan_txt").$("fond_txt").css('height','288px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_hide}","click",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",499,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_intro}","click",function(sym,e){sym.play(500);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("pan_txt").hide();sym.$("close_hide").hide();sym.$("py_mauri").hide();sym.$("py_mali").hide();sym.$("py_niger").hide();sym.$("py_soudan").hide();sym.$("py_tchad").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_niger}","mouseenter",function(sym,e){sym.getComposition().getStage().getSymbol("py_niger").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_niger}","mouseleave",function(sym,e){sym.getComposition().getStage().getSymbol("py_niger").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_niger}","click",function(sym,e){sym.play(751);sym.getSymbol("pan_txt").$("texte").html("L’uranium place le Niger au deuxième rang des producteurs mondiaux. Et la France, qui a bénéficié par le passé d’un accès exclusif à l’exploitation de ce minerai, est le premier investisseur étranger dans ce domaine. La société française Areva y importe actuellement près de 40 % de son uranium et s’est assuré les droits de la mine géante d’Imouraren, potentiellement la deuxième plus grande du monde. Toutefois, la multinationale française est aujourd’hui confrontée à l’arrivée des sociétés concurrentes américaines, chinoises, ou encore sud-coréennes.<br/><br/>Depuis 2012, le Niger a rejoint la liste des pays producteurs et exportateurs d’or noir grâce à ses champs pétrolifères situés dans la zone d'Agadem, dans l’extrême-est du pays. À l’heure actuelle, ses réserves sont estimées à plus de 300 millions de barils. Dans ce secteur, la Chine est devenue un partenaire commercial important et un investisseur majeur.");sym.getSymbol("pan_txt").$("Text").html("Niger");sym.getSymbol("pan_txt").$("fond_txt").css('height','447px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mali}","mouseenter",function(sym,e){sym.getComposition().getStage().getSymbol("py_mali").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mali}","mouseleave",function(sym,e){sym.getComposition().getStage().getSymbol("py_mali").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mali}","click",function(sym,e){sym.play(751);sym.getSymbol("pan_txt").$("texte").html("Le sous-sol malien regorge d’un important potentiel gazier et pétrolier de 850 000 km2, selon l’Autorité pour la recherche pétrolière (Aurep). Principalement localisées dans la région Nord avec le bassin de Taoudenni (partagé entre la Mauritanie, l'Algérie et le Mali), les ressources pétrolières maliennes sont, pour l’heure, largement sous explorées et donc difficiles à évaluer en raison de l’enclavement du pays et des coûts d’exploration. Deux facteurs qui freinent les investisseurs. En revanche, le pays est l'un des premiers producteurs d’or sur le continent (après l’Afrique du Sud et le Ghana). Un minerai qui profite largement aux multinationales sud-africaines, américaines, canadiennes et suisses.");sym.getSymbol("pan_txt").$("Text").html("Mali");sym.getSymbol("pan_txt").$("fond_txt").css('height','325px');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mauri}","mouseenter",function(sym,e){sym.getComposition().getStage().getSymbol("py_mauri").play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mauri}","mouseleave",function(sym,e){sym.getComposition().getStage().getSymbol("py_mauri").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_py_mauri}","click",function(sym,e){sym.play(751);sym.getSymbol("pan_txt").$("texte").html("Les minerais, tels que le fer, le cuivre et l'or, représentent le deuxième secteur d’exportation au Mali, après la pêche. Et le fer constitue à lui seul près de 40 % des exportations du pays. Le Canada est un investisseur clé tant dans le domaine de l’or, avec la mine de Tasiast (400 km au nord-est de Nouakchott), que dans celui de l’uranium avec le bassin de Taoudeni (partagé entre la Mauritanie, l'Algérie et le Mali). Le pays, qui produit également de l’or noir, compte de nombreux investisseurs européens tels que la France (Total), le Royaume-Uni (Tullow Oil et Dana Petroleum), l’Allemagne (Wintershall) et l’Espagne (Repsol) mais aussi la Chine (CNPC).");sym.getSymbol("pan_txt").$("Text").html("Mauritanie");sym.getSymbol("pan_txt").$("fond_txt").css('height','325px');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'py_soudan'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("py_soudan");
//Edge symbol end:'py_soudan'

//=========================================================

//Edge symbol: 'py_tchad'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
})("py_tchad");
//Edge symbol end:'py_tchad'

//=========================================================

//Edge symbol: 'py_niger'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("py_niger");
//Edge symbol end:'py_niger'

//=========================================================

//Edge symbol: 'py_mali'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("py_mali");
//Edge symbol end:'py_mali'

//=========================================================

//Edge symbol: 'py_mauri'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("py_mauri");
//Edge symbol end:'py_mauri'

//=========================================================

//Edge symbol: 'chine'
(function(symbolName){})("chine");
//Edge symbol end:'chine'

//=========================================================

//Edge symbol: 'pan_txt'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",750,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_close_btn}","click",function(sym,e){sym.getComposition().getStage().playReverse();});
//Edge binding end
})("pan_txt");
//Edge symbol end:'pan_txt'

//=========================================================

//Edge symbol: 'close_btn'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_close_btn}","mouseenter",function(sym,e){sym.play(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_close_btn}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_txt_close_btn}","click",function(sym,e){sym.playReverse();});
//Edge binding end
})("close_btn");
//Edge symbol end:'close_btn'

//=========================================================

//Edge symbol: 'invest'
(function(symbolName){})("invest");
//Edge symbol end:'invest'

//=========================================================

//Edge symbol: 'chine_1'
(function(symbolName){})("us");
//Edge symbol end:'us'

//=========================================================

//Edge symbol: 'intro'
(function(symbolName){})("intro");
//Edge symbol end:'intro'

//=========================================================

//Edge symbol: 'legend_fer'
(function(symbolName){})("legend_fer");
//Edge symbol end:'legend_fer'

//=========================================================

//Edge symbol: 'legend_or'
(function(symbolName){})("legend_or");
//Edge symbol end:'legend_or'

//=========================================================

//Edge symbol: 'legend_ura'
(function(symbolName){})("legend_ura");
//Edge symbol end:'legend_ura'

//=========================================================

//Edge symbol: 'legende_petrol'
(function(symbolName){})("legende_petrol");
//Edge symbol end:'legende_petrol'

//=========================================================

//Edge symbol: 'chine_1'
(function(symbolName){})("core");
//Edge symbol end:'core'

//=========================================================

//Edge symbol: 'core_1'
(function(symbolName){})("fra");
//Edge symbol end:'fra'

//=========================================================

//Edge symbol: 'chine_1'
(function(symbolName){})("chine_1");
//Edge symbol end:'chine_1'

//=========================================================

//Edge symbol: 'fra_1'
(function(symbolName){})("fra_1");
//Edge symbol end:'fra_1'

//=========================================================

//Edge symbol: 'fra_2'
(function(symbolName){})("ita");
//Edge symbol end:'ita'

//=========================================================

//Edge symbol: 'ita_1'
(function(symbolName){})("alger");
//Edge symbol end:'alger'

//=========================================================

//Edge symbol: 'alger_1'
(function(symbolName){})("canada");
//Edge symbol end:'canada'

//=========================================================

//Edge symbol: 'canada_1'
(function(symbolName){})("australie");
//Edge symbol end:'australie'

//=========================================================

//Edge symbol: 'australie_1'
(function(symbolName){})("afri_sud");
//Edge symbol end:'afri_sud'

//=========================================================

//Edge symbol: 'australie_1'
(function(symbolName){})("australie_1");
//Edge symbol end:'australie_1'

//=========================================================

//Edge symbol: 'fra_2'
(function(symbolName){})("fra_2");
//Edge symbol end:'fra_2'

//=========================================================

//Edge symbol: 'fra_3'
(function(symbolName){})("ru");
//Edge symbol end:'ru'

//=========================================================

//Edge symbol: 'ru_1'
(function(symbolName){})("suiss");
//Edge symbol end:'suiss'

//=========================================================

//Edge symbol: 'canada_1'
(function(symbolName){})("canada_1");
//Edge symbol end:'canada_1'
})(jQuery,AdobeEdge,"EDGE-18219903");
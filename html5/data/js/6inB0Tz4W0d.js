window.globalProvideData('slide', '{"title":"7. Tuliskan perintah untuk menampilkan komentar dalam satu baris!","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":15,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide15","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":5,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6inB0Tz4W0d","actionGroups":{"ReviewInt_6lltkuRkoLC":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"68mqJCHVsBJ"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6izkRaJAkK9.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lltkuRkoLC_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lltkuRkoLC_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lltkuRkoLC","typea":"var","valueb":"6nNMJBLkgsx","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6nNMJBLkgsx.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6lltkuRkoLC"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6nNMJBLkgsx.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6lltkuRkoLC"}]}]}]},"ReviewIntCorrectIncorrect_6lltkuRkoLC":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6lltkuRkoLC_ReviewShape"}}]},"AnsweredInt_6lltkuRkoLC":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6lltkuRkoLC"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6lltkuRkoLC":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"68mqJCHVsBJ"},"enabled":{"type":"boolean","value":false}}]},"6lltkuRkoLC_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6izkRaJAkK9.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6nNMJBLkgsx.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6lltkuRkoLC"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6izkRaJAkK9.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6izkRaJAkK9.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6lltkuRkoLC"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6inB0Tz4W0d":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6FluO7tzcP6"}}]},"NavigationRestrictionPreviousSlide_6inB0Tz4W0d":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5sfensXE5vS","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5sfensXE5vS","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6lltkuRkoLC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6lltkuRkoLC"}],"elseActions":[{"kind":"exe_actiongroup","id":"6lltkuRkoLC_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6lltkuRkoLC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lltkuRkoLC","typea":"var","valueb":"6nNMJBLkgsx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6nNMJBLkgsx"},"completed_slide_ref":{"type":"string","value":"_player.6rJx0nrdcmw.5V9hk9EipCz"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6lltkuRkoLC","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6lltkuRkoLC","typea":"var","valueb":"6nNMJBLkgsx","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6nNMJBLkgsx"},"completed_slide_ref":{"type":"string","value":"_player.6rJx0nrdcmw.5V9hk9EipCz"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6inB0Tz4W0d"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6inB0Tz4W0d"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":7200,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6lltkuRkoLC_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nVhbp409Ol"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68mqJCHVsBJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5vyyr3q8Hxf"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xIVtXwYEZz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e9xzXNBwNm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zhbgsHoiOb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UGcmnRyrmp"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OAc6wUGyzj"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62TBKo4v9IV"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cNRMYQ0IKb"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6m5wFu02Y0m"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6gGPPQLKJxG_80_DX150_DY150.swf","type":"normal","altText":"server (8).png","width":117,"height":117,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":88,"yPos":24,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":37.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":75,"bottom":75,"altText":"server (8).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":75,"height":75,"strokewidth":0}},"width":75,"height":75,"resume":true,"useHandCursor":true,"id":"62TBKo4v9IV"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6kpOPoAKP5K_80_DX150_DY150.swf","type":"normal","altText":"server (7).png","width":117,"height":117,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":88,"yPos":24,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":37.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":75,"bottom":75,"altText":"server (7).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":75,"height":75,"strokewidth":0}},"width":75,"height":75,"resume":true,"useHandCursor":true,"id":"5cNRMYQ0IKb","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":13,"tabIndex":13,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":104,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":208,"bottom":14,"pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":-1,"yPos":-1,"width":209,"height":15,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":208,"bottom":14,"pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":-1,"yPos":-1,"width":209,"height":15,"strokewidth":0}}}],"width":208,"height":14,"resume":true,"useHandCursor":true,"id":"6m5wFu02Y0m_track"},{"kind":"vectorshape","rotation":0,"accType":"slider","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":7,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":9.5,"rotateYPos":13,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"dragpath":{"startvalue":0,"endvalue":10,"increment":1,"snap":true,"liveupdating":true,"bindto":"_player.Slider1","path":[{"kind":"segment","type":"line","anchora":{"x":"0","y":"0","dx":"0","dy":"0"},"anchorb":{"x":"189.3075","y":"0","dx":"0","dy":"0"}}],"initialValue":10},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":20,"bottom":27,"altText":"Slider 2 berkisar dari 0 ke 10","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":208,"height":40,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":20,"bottom":27,"altText":"Slider 1 berkisar dari 0 ke 10","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":-2,"yPos":-2,"width":22,"height":29,"strokewidth":1}}}],"width":19,"height":26,"resume":true,"useHandCursor":true,"id":"6m5wFu02Y0m"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6m5wFu02Y0m"}},{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6m5wFu02Y0m_track"}}],"clickdef":[{"kind":"objref","type":"string","value":"6m5wFu02Y0m"},{"kind":"objref","type":"string","value":"6m5wFu02Y0m_track"}]},{"kind":"state","name":"_default_Hover","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default_Hover"},"objRef":{"type":"string","value":"6m5wFu02Y0m"}},{"kind":"setobjstate","stateRef":{"type":"string","value":"_default_Hover"},"objRef":{"type":"string","value":"6m5wFu02Y0m_track"}}],"clickdef":[{"kind":"objref","type":"string","value":"6m5wFu02Y0m"},{"kind":"objref","type":"string","value":"6m5wFu02Y0m_track"}]}],"shapemaskId":"","xPos":168,"yPos":40,"tabIndex":12,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":104,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":false,"shuffleLock":false,"width":208,"height":40,"resume":true,"useHandCursor":true,"id":"6m5wFu02Y0m","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6m5wFu02Y0m_track"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6m5wFu02Y0m"}}]}},"events":[{"kind":"onvarchanged","varname":"_player.Slider1","priority":0,"actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":0,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5vFQA1znNsY"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":1,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6khyo3yKFjA"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":2,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5eK4pTgYP4f"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":3,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"60kjSerZmcE"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":4,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5idk7ecxPIL"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":5,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"5uNUd13J5Le"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":6,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6LCp7wLadKT"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":7,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6WsHYq0CcSD"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":8,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"604MmWMZmVh"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":9,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6kleye1erJl"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":10,"typeb":"number"}]}]}},"thenActions":[{"kind":"exe_javascript","id":"6q9y9IAkqb5"}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#Slider1","typea":"var","valueb":0,"typeb":"number"}]}]}},"thenActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_parent.5cNRMYQ0IKb"}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_player.#Slider1","typea":"var","valueb":0,"typeb":"number"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5cNRMYQ0IKb.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5cNRMYQ0IKb"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5cNRMYQ0IKb.#_state","typea":"var","valueb":"_default","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_parent.5cNRMYQ0IKb.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5cNRMYQ0IKb"}}],"elseActions":[{"kind":"adjustvar","variable":"_parent.5cNRMYQ0IKb._state","operator":"set","value":{"type":"string","value":"_default"}},{"kind":"exe_actiongroup","id":"_parent.5cNRMYQ0IKb.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"_parent.5cNRMYQ0IKb"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5cNRMYQ0IKb"}}]}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":49,"id":"01","url":"story_content/5dLrbfpWWtm_80_DX2160_DY2160.swf","type":"normal","altText":"server (23).png","width":1623,"height":797,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":100,"yPos":95,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":540,"rotateYPos":265,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1080,"bottom":530,"altText":"server (23).png","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":0,"yPos":0,"width":1080,"height":530,"strokewidth":0}},"width":1080,"height":530,"resume":true,"useHandCursor":true,"id":"6nVhbp409Ol"},{"kind":"textinput","bindto":"_player.TextEntry1","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"ketikkan jawaban di sini","fontsize":29,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":248,"yPos":280,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":414.5,"rotateYPos":27.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"68mqJCHVsBJ","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":810,"height":56,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":316,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":175}}},"html5data":{"xPos":0,"yPos":0,"width":830,"height":56,"strokewidth":1}},"width":830,"height":56,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":831,"bottom":57,"altText":"ketikkan jawaban di sini","pngfb":false,"pr":{"l":"Lib","i":174}}},"id":"68mqJCHVsBJ","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry1","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6izkRaJAkK9"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5vyyr3q8Hxf_1376691735","id":"01","linkId":"txt__default_5vyyr3q8Hxf","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":870,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":177}}}],"shapemaskId":"","xPos":206,"yPos":218,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":922,"bottom":40,"altText":"7. Tuliskan perintah untuk menampilkan komentar dalam satu baris!","pngfb":false,"pr":{"l":"Lib","i":176}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":40,"strokewidth":0}},"width":922,"height":40,"resume":true,"useHandCursor":true,"id":"5vyyr3q8Hxf"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":55,"id":"01","url":"story_content/6r8PtRQLWb3_80_DX150_DY150.swf","type":"normal","altText":"server (12).png","width":150,"height":150,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":64,"yPos":352,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":37.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":75,"bottom":75,"altText":"server (12).png","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":0,"yPos":0,"width":75,"height":75,"strokewidth":0}},"width":75,"height":75,"resume":true,"useHandCursor":true,"id":"5xIVtXwYEZz","events":[{"kind":"onrelease","actions":[{"kind":"history_prev"}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":50,"id":"01","url":"story_content/5kfY7yZfdoS_80_DX150_DY150.swf","type":"normal","altText":"server (13).png","width":150,"height":150,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1144,"yPos":344,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":37.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":75,"bottom":75,"altText":"server (13).png","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":0,"yPos":0,"width":75,"height":75,"strokewidth":0}},"width":75,"height":75,"resume":true,"useHandCursor":true,"id":"5e9xzXNBwNm","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6rJx0nrdcmw.6FluO7tzcP6"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":30,"id":"01","url":"story_content/6DhuRvz7USq_80_DX150_DY150.swf","type":"normal","altText":"server (9).png","width":117,"height":117,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":600,"yPos":584,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":37.5,"rotateYPos":37.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":75,"bottom":75,"altText":"server (9).png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":75,"height":75,"strokewidth":0}},"width":75,"height":75,"resume":true,"useHandCursor":true,"id":"5zhbgsHoiOb","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6rJx0nrdcmw.6nGqquMY96h"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_6UGcmnRyrmp","type":"richvartext","xPos":0,"yPos":0,"width":308,"height":38,"device":true,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"vartext":{"blocks":[{"spans":[{"text":"%_player.TextEntry%","style":{"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":30.402,"descent":8.333,"leading":0,"underlinePosition":-2.139,"underlineThickness":1.417,"xHeight":15.528}}],"runs":[{"idx":0,"len":19,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":792,"yPos":528,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":163.5,"rotateYPos":23.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":329,"bottom":49,"altText":"%_player.TextEntry%","pngfb":false,"pr":{"l":"Lib","i":84}},"html5data":{"xPos":0,"yPos":0,"width":328,"height":48,"strokewidth":1}},"width":328,"height":48,"resume":true,"useHandCursor":true,"id":"6UGcmnRyrmp"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":12,"id":"01","url":"story_content/6iOy4j9XfBC_80_DX1158_DY1158.swf","type":"normal","altText":"server (38).png","width":791,"height":164,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":351,"yPos":-24,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":289.5,"rotateYPos":60,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":579,"bottom":120,"altText":"server (38).png","pngfb":false,"pr":{"l":"Lib","i":7}},"html5data":{"xPos":0,"yPos":0,"width":579,"height":120,"strokewidth":0}},"width":579,"height":120,"resume":true,"useHandCursor":true,"id":"6OAc6wUGyzj"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6lltkuRkoLC_CorrectReview","id":"01","linkId":"6lltkuRkoLC_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":674,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":86}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":85}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6lltkuRkoLC_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6lltkuRkoLC_IncorrectReview","id":"01","linkId":"6lltkuRkoLC_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":671,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":88}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":87}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6lltkuRkoLC_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6lltkuRkoLC_ReviewShape","id":"01","linkId":"txt_6lltkuRkoLC_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":518,"bottom":438,"pngfb":false,"pr":{"l":"Lib","i":179}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":11,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1260,"bottom":442,"altText":"","pngfb":false,"pr":{"l":"Lib","i":178}},"html5data":{"xPos":1,"yPos":1,"width":1258,"height":440,"strokewidth":1}},"width":1152,"height":565,"resume":false,"useHandCursor":true,"id":"6lltkuRkoLC_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');
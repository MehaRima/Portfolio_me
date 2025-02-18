(function(){var a,b,c,d,e,f,g,h,i=[].slice,j={}.hasOwnProperty,k=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=function(){},b=function(){function a(){}return a.prototype.addEventListener=a.prototype.on,a.prototype.on=function(a,b){return this._callbacks=this._callbacks||{},this._callbacks[a]||(this._callbacks[a]=[]),this._callbacks[a].push(b),this},a.prototype.emit=function(){var a,b,c,d,e,f;if(d=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],this._callbacks=this._callbacks||{},c=this._callbacks[d])for(e=0,f=c.length;f>e;e++)b=c[e],b.apply(this,a);return this},a.prototype.removeListener=a.prototype.off,a.prototype.removeAllListeners=a.prototype.off,a.prototype.removeEventListener=a.prototype.off,a.prototype.off=function(a,b){var c,d,e,f,g;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(d=this._callbacks[a],!d)return this;if(1===arguments.length)return delete this._callbacks[a],this;for(e=f=0,g=d.length;g>f;e=++f)if(c=d[e],c===b){d.splice(e,1);break}return this},a}(),a=function(a){function c(a,b){var e,f,g;if(this.element=a,this.version=c.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(c.instances.push(this),this.element.dropzone=this,e=null!=(g=c.optionsForElement(this.element))?g:{},this.options=d({},this.defaultOptions,e,null!=b?b:{}),this.options.forceFallback||!c.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(f=this.getExistingFallback())&&f.parentNode&&f.parentNode.removeChild(f),this.options.previewsContainer!==!1&&(this.previewsContainer=this.options.previewsContainer?c.getElement(this.options.previewsContainer,"previewsContainer"):this.element),this.options.clickable&&(this.clickableElements=this.options.clickable===!0?[this.element]:c.getElements(this.options.clickable,"clickable")),this.init()}var d,e;return k(c,a),c.prototype.Emitter=b,c.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],c.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(a,b){return b()},init:function(){return g},forceFallback:!1,fallback:function(){var a,b,d,e,f,g;for(this.element.className=""+this.element.className+" dz-browser-not-supported",g=this.element.getElementsByTagName("div"),e=0,f=g.length;f>e;e++)a=g[e],/(^| )dz-message($| )/.test(a.className)&&(b=a,a.className="dz-message");return b||(b=c.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(b)),d=b.getElementsByTagName("span")[0],d&&(null!=d.textContent?d.textContent=this.options.dictFallbackMessage:null!=d.innerText&&(d.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(a){var b,c,d;return b={srcX:0,srcY:0,srcWidth:a.width,srcHeight:a.height},c=a.width/a.height,b.optWidth=this.options.thumbnailWidth,b.optHeight=this.options.thumbnailHeight,null==b.optWidth&&null==b.optHeight?(b.optWidth=b.srcWidth,b.optHeight=b.srcHeight):null==b.optWidth?b.optWidth=c*b.optHeight:null==b.optHeight&&(b.optHeight=1/c*b.optWidth),d=b.optWidth/b.optHeight,a.height<b.optHeight||a.width<b.optWidth?(b.trgHeight=b.srcHeight,b.trgWidth=b.srcWidth):c>d?(b.srcHeight=a.height,b.srcWidth=b.srcHeight*d):(b.srcWidth=a.width,b.srcHeight=b.srcWidth/d),b.srcX=(a.width-b.srcWidth)/2,b.srcY=(a.height-b.srcHeight)/2,b},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:g,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:g,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(a){var b,d,e,f,g,h,i,j,k,l,m,n,o;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(a.previewElement=c.createElement(this.options.previewTemplate.trim()),a.previewTemplate=a.previewElement,this.previewsContainer.appendChild(a.previewElement),l=a.previewElement.querySelectorAll("[data-dz-name]"),f=0,i=l.length;i>f;f++)b=l[f],b.textContent=this._renameFilename(a.name);for(m=a.previewElement.querySelectorAll("[data-dz-size]"),g=0,j=m.length;j>g;g++)b=m[g],b.innerHTML=this.filesize(a.size);for(this.options.addRemoveLinks&&(a._removeLink=c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),a.previewElement.appendChild(a._removeLink)),d=function(b){return function(d){return d.preventDefault(),d.stopPropagation(),a.status===c.UPLOADING?c.confirm(b.options.dictCancelUploadConfirmation,function(){return b.removeFile(a)}):b.options.dictRemoveFileConfirmation?c.confirm(b.options.dictRemoveFileConfirmation,function(){return b.removeFile(a)}):b.removeFile(a)}}(this),n=a.previewElement.querySelectorAll("[data-dz-remove]"),o=[],h=0,k=n.length;k>h;h++)e=n[h],o.push(e.addEventListener("click",d));return o}},removedfile:function(a){var b;return a.previewElement&&null!=(b=a.previewElement)&&b.parentNode.removeChild(a.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(a,b){var c,d,e,f;if(a.previewElement){for(a.previewElement.classList.remove("dz-file-preview"),f=a.previewElement.querySelectorAll("[data-dz-thumbnail]"),d=0,e=f.length;e>d;d++)c=f[d],c.alt=a.name,c.src=b;return setTimeout(function(){return function(){return a.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(a,b){var c,d,e,f,g;if(a.previewElement){for(a.previewElement.classList.add("dz-error"),"String"!=typeof b&&b.error&&(b=b.error),f=a.previewElement.querySelectorAll("[data-dz-errormessage]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.textContent=b);return g}},errormultiple:g,processing:function(a){return a.previewElement&&(a.previewElement.classList.add("dz-processing"),a._removeLink)?a._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:g,uploadprogress:function(a,b){var c,d,e,f,g;if(a.previewElement){for(f=a.previewElement.querySelectorAll("[data-dz-uploadprogress]"),g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push("PROGRESS"===c.nodeName?c.value=b:c.style.width=""+b+"%");return g}},totaluploadprogress:g,sending:g,sendingmultiple:g,success:function(a){return a.previewElement?a.previewElement.classList.add("dz-success"):void 0},successmultiple:g,canceled:function(a){return this.emit("error",a,"Upload canceled.")},canceledmultiple:g,complete:function(a){return a._removeLink&&(a._removeLink.textContent=this.options.dictRemoveFile),a.previewElement?a.previewElement.classList.add("dz-complete"):void 0},completemultiple:g,maxfilesexceeded:g,maxfilesreached:g,queuecomplete:g,addedfiles:g,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},d=function(){var a,b,c,d,e,f,g;for(d=arguments[0],c=2<=arguments.length?i.call(arguments,1):[],f=0,g=c.length;g>f;f++){b=c[f];for(a in b)e=b[a],d[a]=e}return d},c.prototype.getAcceptedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted&&e.push(a);return e},c.prototype.getRejectedFiles=function(){var a,b,c,d,e;for(d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],a.accepted||e.push(a);return e},c.prototype.getFilesWithStatus=function(a){var b,c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.status===a&&f.push(b);return f},c.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(c.QUEUED)},c.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(c.UPLOADING)},c.prototype.getAddedFiles=function(){return this.getFilesWithStatus(c.ADDED)},c.prototype.getActiveFiles=function(){var a,b,d,e,f;for(e=this.files,f=[],b=0,d=e.length;d>b;b++)a=e[b],(a.status===c.UPLOADING||a.status===c.QUEUED)&&f.push(a);return f},c.prototype.init=function(){var a,b,d,e,f,g,h;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(d=function(a){return function(){return a.hiddenFileInput&&a.hiddenFileInput.parentNode.removeChild(a.hiddenFileInput),a.hiddenFileInput=document.createElement("input"),a.hiddenFileInput.setAttribute("type","file"),(null==a.options.maxFiles||a.options.maxFiles>1)&&a.hiddenFileInput.setAttribute("multiple","multiple"),a.hiddenFileInput.className="dz-hidden-input",null!=a.options.acceptedFiles&&a.hiddenFileInput.setAttribute("accept",a.options.acceptedFiles),null!=a.options.capture&&a.hiddenFileInput.setAttribute("capture",a.options.capture),a.hiddenFileInput.style.visibility="hidden",a.hiddenFileInput.style.position="absolute",a.hiddenFileInput.style.top="0",a.hiddenFileInput.style.left="0",a.hiddenFileInput.style.height="0",a.hiddenFileInput.style.width="0",document.querySelector(a.options.hiddenInputContainer).appendChild(a.hiddenFileInput),a.hiddenFileInput.addEventListener("change",function(){var b,c,e,f;if(c=a.hiddenFileInput.files,c.length)for(e=0,f=c.length;f>e;e++)b=c[e],a.addFile(b);return a.emit("addedfiles",c),d()})}}(this))(),this.URL=null!=(g=window.URL)?g:window.webkitURL,h=this.events,e=0,f=h.length;f>e;e++)a=h[e],this.on(a,this.options[a]);return this.on("uploadprogress",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(a){return function(){return a.updateTotalUploadProgress()}}(this)),this.on("canceled",function(a){return function(b){return a.emit("complete",b)}}(this)),this.on("complete",function(a){return function(){return 0===a.getAddedFiles().length&&0===a.getUploadingFiles().length&&0===a.getQueuedFiles().length?setTimeout(function(){return a.emit("queuecomplete")},0):void 0}}(this)),b=function(a){return a.stopPropagation(),a.preventDefault?a.preventDefault():a.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(a){return function(b){return a.emit("dragstart",b)}}(this),dragenter:function(a){return function(c){return b(c),a.emit("dragenter",c)}}(this),dragover:function(a){return function(c){var d;try{d=c.dataTransfer.effectAllowed}catch(e){}return c.dataTransfer.dropEffect="move"===d||"linkMove"===d?"move":"copy",b(c),a.emit("dragover",c)}}(this),dragleave:function(a){return function(b){return a.emit("dragleave",b)}}(this),drop:function(a){return function(c){return b(c),a.drop(c)}}(this),dragend:function(a){return function(b){return a.emit("dragend",b)}}(this)}}],this.clickableElements.forEach(function(a){return function(b){return a.listeners.push({element:b,events:{click:function(d){return(b!==a.element||d.target===a.element||c.elementInside(d.target,a.element.querySelector(".dz-message")))&&a.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},c.prototype.destroy=function(){var a;return this.disable(),this.removeAllFiles(!0),(null!=(a=this.hiddenFileInput)?a.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,c.instances.splice(c.instances.indexOf(this),1)},c.prototype.updateTotalUploadProgress=function(){var a,b,c,d,e,f,g,h;if(d=0,c=0,a=this.getActiveFiles(),a.length){for(h=this.getActiveFiles(),f=0,g=h.length;g>f;f++)b=h[f],d+=b.upload.bytesSent,c+=b.upload.total;e=100*d/c}else e=100;return this.emit("totaluploadprogress",e,c,d)},c.prototype._getParamName=function(a){return"function"==typeof this.options.paramName?this.options.paramName(a):""+this.options.paramName+(this.options.uploadMultiple?"["+a+"]":"")},c.prototype._renameFilename=function(a){return"function"!=typeof this.options.renameFilename?a:this.options.renameFilename(a)},c.prototype.getFallbackForm=function(){var a,b,d,e;return(a=this.getExistingFallback())?a:(d='<div class="dz-fallback">',this.options.dictFallbackText&&(d+="<p>"+this.options.dictFallbackText+"</p>"),d+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',b=c.createElement(d),"FORM"!==this.element.tagName?(e=c.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),e.appendChild(b)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=e?e:b)},c.prototype.getExistingFallback=function(){var a,b,c,d,e,f;for(b=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)if(b=a[c],/(^| )fallback($| )/.test(b.className))return b},f=["div","form"],d=0,e=f.length;e>d;d++)if(c=f[d],a=b(this.element.getElementsByTagName(c)))return a},c.prototype.setupEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.addEventListener(b,c,!1));return e}());return g},c.prototype.removeEventListeners=function(){var a,b,c,d,e,f,g;for(f=this.listeners,g=[],d=0,e=f.length;e>d;d++)a=f[d],g.push(function(){var d,e;d=a.events,e=[];for(b in d)c=d[b],e.push(a.element.removeEventListener(b,c,!1));return e}());return g},c.prototype.disable=function(){var a,b,c,d,e;for(this.clickableElements.forEach(function(a){return a.classList.remove("dz-clickable")}),this.removeEventListeners(),d=this.files,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(this.cancelUpload(a));return e},c.prototype.enable=function(){return this.clickableElements.forEach(function(a){return a.classList.add("dz-clickable")}),this.setupEventListeners()},c.prototype.filesize=function(a){var b,c,d,e,f,g,h,i;if(d=0,e="b",a>0){for(g=["TB","GB","MB","KB","b"],c=h=0,i=g.length;i>h;c=++h)if(f=g[c],b=Math.pow(this.options.filesizeBase,4-c)/10,a>=b){d=a/Math.pow(this.options.filesizeBase,4-c),e=f;break}d=Math.round(10*d)/10}return"<strong>"+d+"</strong> "+e},c.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},c.prototype.drop=function(a){var b,c;a.dataTransfer&&(this.emit("drop",a),b=a.dataTransfer.files,this.emit("addedfiles",b),b.length&&(c=a.dataTransfer.items,c&&c.length&&null!=c[0].webkitGetAsEntry?this._addFilesFromItems(c):this.handleFiles(b)))},c.prototype.paste=function(a){var b,c;if(null!=(null!=a&&null!=(c=a.clipboardData)?c.items:void 0))return this.emit("paste",a),b=a.clipboardData.items,b.length?this._addFilesFromItems(b):void 0},c.prototype.handleFiles=function(a){var b,c,d,e;for(e=[],c=0,d=a.length;d>c;c++)b=a[c],e.push(this.addFile(b));return e},c.prototype._addFilesFromItems=function(a){var b,c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],f.push(null!=c.webkitGetAsEntry&&(b=c.webkitGetAsEntry())?b.isFile?this.addFile(c.getAsFile()):b.isDirectory?this._addFilesFromDirectory(b,b.name):void 0:null!=c.getAsFile?null==c.kind||"file"===c.kind?this.addFile(c.getAsFile()):void 0:void 0);return f},c.prototype._addFilesFromDirectory=function(a,b){var c,d,e;return c=a.createReader(),d=function(a){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(a):void 0},(e=function(a){return function(){return c.readEntries(function(c){var d,f,g;if(c.length>0){for(f=0,g=c.length;g>f;f++)d=c[f],d.isFile?d.file(function(c){return a.options.ignoreHiddenFiles&&"."===c.name.substring(0,1)?void 0:(c.fullPath=""+b+"/"+c.name,a.addFile(c))}):d.isDirectory&&a._addFilesFromDirectory(d,""+b+"/"+d.name);e()}return null},d)}}(this))()},c.prototype.accept=function(a,b){return a.size>1024*this.options.maxFilesize*1024?b(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(a.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):c.isValidFile(a,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",a)):this.options.accept.call(this,a,b):b(this.options.dictInvalidFileType)},c.prototype.addFile=function(a){return a.upload={progress:0,total:a.size,bytesSent:0},this.files.push(a),a.status=c.ADDED,this.emit("addedfile",a),this._enqueueThumbnail(a),this.accept(a,function(b){return function(c){return c?(a.accepted=!1,b._errorProcessing([a],c)):(a.accepted=!0,b.options.autoQueue&&b.enqueueFile(a)),b._updateMaxFilesReachedClass()}}(this))},c.prototype.enqueueFiles=function(a){var b,c,d;for(c=0,d=a.length;d>c;c++)b=a[c],this.enqueueFile(b);return null},c.prototype.enqueueFile=function(a){if(a.status!==c.ADDED||a.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return a.status=c.QUEUED,this.options.autoProcessQueue?setTimeout(function(a){return function(){return a.processQueue()}}(this),0):void 0},c.prototype._thumbnailQueue=[],c.prototype._processingThumbnail=!1,c.prototype._enqueueThumbnail=function(a){return this.options.createImageThumbnails&&a.type.match(/image.*/)&&a.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(a),setTimeout(function(a){return function(){return a._processThumbnailQueue()}}(this),0)):void 0},c.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(a){return function(){return a._processingThumbnail=!1,a._processThumbnailQueue()}}(this)))},c.prototype.removeFile=function(a){return a.status===c.UPLOADING&&this.cancelUpload(a),this.files=h(this.files,a),this.emit("removedfile",a),0===this.files.length?this.emit("reset"):void 0},c.prototype.removeAllFiles=function(a){var b,d,e,f;for(null==a&&(a=!1),f=this.files.slice(),d=0,e=f.length;e>d;d++)b=f[d],(b.status!==c.UPLOADING||a)&&this.removeFile(b);return null},c.prototype.createThumbnail=function(a,b){var c;return c=new FileReader,c.onload=function(d){return function(){return"image/svg+xml"===a.type?(d.emit("thumbnail",a,c.result),void(null!=b&&b())):d.createThumbnailFromUrl(a,c.result,b)}}(this),c.readAsDataURL(a)},c.prototype.createThumbnailFromUrl=function(a,b,c,d){var e;return e=document.createElement("img"),d&&(e.crossOrigin=d),e.onload=function(b){return function(){var d,g,h,i,j,k,l,m;return a.width=e.width,a.height=e.height,h=b.options.resize.call(b,a),null==h.trgWidth&&(h.trgWidth=h.optWidth),null==h.trgHeight&&(h.trgHeight=h.optHeight),d=document.createElement("canvas"),g=d.getContext("2d"),d.width=h.trgWidth,d.height=h.trgHeight,f(g,e,null!=(j=h.srcX)?j:0,null!=(k=h.srcY)?k:0,h.srcWidth,h.srcHeight,null!=(l=h.trgX)?l:0,null!=(m=h.trgY)?m:0,h.trgWidth,h.trgHeight),i=d.toDataURL("image/png"),b.emit("thumbnail",a,i),null!=c?c():void 0}}(this),null!=c&&(e.onerror=c),e.src=b},c.prototype.processQueue=function(){var a,b,c,d;if(b=this.options.parallelUploads,c=this.getUploadingFiles().length,a=c,!(c>=b)&&(d=this.getQueuedFiles(),d.length>0)){if(this.options.uploadMultiple)return this.processFiles(d.slice(0,b-c));for(;b>a;){if(!d.length)return;this.processFile(d.shift()),a++}}},c.prototype.processFile=function(a){return this.processFiles([a])},c.prototype.processFiles=function(a){var b,d,e;for(d=0,e=a.length;e>d;d++)b=a[d],b.processing=!0,b.status=c.UPLOADING,this.emit("processing",b);return this.options.uploadMultiple&&this.emit("processingmultiple",a),this.uploadFiles(a)},c.prototype._getFilesWithXhr=function(a){var b,c;return c=function(){var c,d,e,f;for(e=this.files,f=[],c=0,d=e.length;d>c;c++)b=e[c],b.xhr===a&&f.push(b);return f}.call(this)},c.prototype.cancelUpload=function(a){var b,d,e,f,g,h,i;if(a.status===c.UPLOADING){for(d=this._getFilesWithXhr(a.xhr),e=0,g=d.length;g>e;e++)b=d[e],b.status=c.CANCELED;for(a.xhr.abort(),f=0,h=d.length;h>f;f++)b=d[f],this.emit("canceled",b);this.options.uploadMultiple&&this.emit("canceledmultiple",d)}else((i=a.status)===c.ADDED||i===c.QUEUED)&&(a.status=c.CANCELED,this.emit("canceled",a),this.options.uploadMultiple&&this.emit("canceledmultiple",[a]));return this.options.autoProcessQueue?this.processQueue():void 0},e=function(){var a,b;return b=arguments[0],a=2<=arguments.length?i.call(arguments,1):[],"function"==typeof b?b.apply(this,a):b},c.prototype.uploadFile=function(a){return this.uploadFiles([a])},c.prototype.uploadFiles=function(a){var b,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L;for(w=new XMLHttpRequest,x=0,B=a.length;B>x;x++)b=a[x],b.xhr=w;p=e(this.options.method,a),u=e(this.options.url,a),w.open(p,u,!0),w.withCredentials=!!this.options.withCredentials,s=null,g=function(c){return function(){var d,e,f;for(f=[],d=0,e=a.length;e>d;d++)b=a[d],f.push(c._errorProcessing(a,s||c.options.dictResponseError.replace("{{statusCode}}",w.status),w));return f}}(this),t=function(c){return function(d){var e,f,g,h,i,j,k,l,m;if(null!=d)for(f=100*d.loaded/d.total,g=0,j=a.length;j>g;g++)b=a[g],b.upload={progress:f,total:d.total,bytesSent:d.loaded};else{for(e=!0,f=100,h=0,k=a.length;k>h;h++)b=a[h],(100!==b.upload.progress||b.upload.bytesSent!==b.upload.total)&&(e=!1),b.upload.progress=f,b.upload.bytesSent=b.upload.total;if(e)return}for(m=[],i=0,l=a.length;l>i;i++)b=a[i],m.push(c.emit("uploadprogress",b,f,b.upload.bytesSent));return m}}(this),w.onload=function(b){return function(d){var e;if(a[0].status!==c.CANCELED&&4===w.readyState){if(s=w.responseText,w.getResponseHeader("content-type")&&~w.getResponseHeader("content-type").indexOf("application/json"))try{s=JSON.parse(s)}catch(f){d=f,s="Invalid JSON response from server."}return t(),200<=(e=w.status)&&300>e?b._finished(a,s,d):g()}}}(this),w.onerror=function(){return function(){return a[0].status!==c.CANCELED?g():void 0}}(this),r=null!=(G=w.upload)?G:w,r.onprogress=t,j={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&d(j,this.options.headers);for(h in j)i=j[h],i&&w.setRequestHeader(h,i);if(f=new FormData,this.options.params){H=this.options.params;for(o in H)v=H[o],f.append(o,v)}for(y=0,C=a.length;C>y;y++)b=a[y],this.emit("sending",b,w,f);if(this.options.uploadMultiple&&this.emit("sendingmultiple",a,w,f),"FORM"===this.element.tagName)for(I=this.element.querySelectorAll("input, textarea, select, button"),z=0,D=I.length;D>z;z++)if(l=I[z],m=l.getAttribute("name"),n=l.getAttribute("type"),"SELECT"===l.tagName&&l.hasAttribute("multiple"))for(J=l.options,A=0,E=J.length;E>A;A++)q=J[A],q.selected&&f.append(m,q.value);else(!n||"checkbox"!==(K=n.toLowerCase())&&"radio"!==K||l.checked)&&f.append(m,l.value);for(k=F=0,L=a.length-1;L>=0?L>=F:F>=L;k=L>=0?++F:--F)f.append(this._getParamName(k),a[k],this._renameFilename(a[k].name));return this.submitRequest(w,f,a)},c.prototype.submitRequest=function(a,b){return a.send(b)},c.prototype._finished=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.SUCCESS,this.emit("success",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("successmultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c.prototype._errorProcessing=function(a,b,d){var e,f,g;for(f=0,g=a.length;g>f;f++)e=a[f],e.status=c.ERROR,this.emit("error",e,b,d),this.emit("complete",e);return this.options.uploadMultiple&&(this.emit("errormultiple",a,b,d),this.emit("completemultiple",a)),this.options.autoProcessQueue?this.processQueue():void 0},c}(b),a.version="4.3.0",a.options={},a.optionsForElement=function(b){return b.getAttribute("id")?a.options[c(b.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(a){if("string"==typeof a&&(a=document.querySelector(a)),null==(null!=a?a.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return a.dropzone},a.autoDiscover=!0,a.discover=function(){var b,c,d,e,f,g;for(document.querySelectorAll?d=document.querySelectorAll(".dropzone"):(d=[],b=function(a){var b,c,e,f;for(f=[],c=0,e=a.length;e>c;c++)b=a[c],f.push(/(^| )dropzone($| )/.test(b.className)?d.push(b):void 0);return f},b(document.getElementsByTagName("div")),b(document.getElementsByTagName("form"))),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.optionsForElement(c)!==!1?new a(c):void 0);return g},a.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],a.isBrowserSupported=function(){var b,c,d,e,f;if(b=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(f=a.blacklistedBrowsers,d=0,e=f.length;e>d;d++)c=f[d],c.test(navigator.userAgent)&&(b=!1);else b=!1;else b=!1;return b},h=function(a,b){var c,d,e,f;for(f=[],d=0,e=a.length;e>d;d++)c=a[d],c!==b&&f.push(c);return f},c=function(a){return a.replace(/[\-_](\w)/g,function(a){return a.charAt(1).toUpperCase()})},a.createElement=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.childNodes[0]},a.elementInside=function(a,b){if(a===b)return!0;for(;a=a.parentNode;)if(a===b)return!0;return!1},a.getElement=function(a,b){var c;if("string"==typeof a?c=document.querySelector(a):null!=a.nodeType&&(c=a),null==c)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector or a plain HTML element.");return c},a.getElements=function(a,b){var c,d,e,f,g,h,i,j;if(a instanceof Array){e=[];try{for(f=0,h=a.length;h>f;f++)d=a[f],e.push(this.getElement(d,b))}catch(k){c=k,e=null}}else if("string"==typeof a)for(e=[],j=document.querySelectorAll(a),g=0,i=j.length;i>g;g++)d=j[g],e.push(d);else null!=a.nodeType&&(e=[a]);if(null==e||!e.length)throw new Error("Invalid `"+b+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return e},a.confirm=function(a,b,c){return window.confirm(a)?b():null!=c?c():void 0},a.isValidFile=function(a,b){var c,d,e,f,g;if(!b)return!0;for(b=b.split(","),d=a.type,c=d.replace(/\/.*$/,""),f=0,g=b.length;g>f;f++)if(e=b[f],e=e.trim(),"."===e.charAt(0)){if(-1!==a.name.toLowerCase().indexOf(e.toLowerCase(),a.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(c===e.replace(/\/.*$/,""))return!0
}else if(d===e)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(b){return this.each(function(){return new a(this,b)})}),"undefined"!=typeof module&&null!==module?module.exports=a:window.Dropzone=a,a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success",e=function(a){var b,c,d,e,f,g,h,i,j,k;for(h=a.naturalWidth,g=a.naturalHeight,c=document.createElement("canvas"),c.width=1,c.height=g,d=c.getContext("2d"),d.drawImage(a,0,0),e=d.getImageData(0,0,1,g).data,k=0,f=g,i=g;i>k;)b=e[4*(i-1)+3],0===b?f=i:k=i,i=f+k>>1;return j=i/g,0===j?1:j},f=function(a,b,c,d,f,g,h,i,j,k){var l;return l=e(b),a.drawImage(b,c,d,f,g,h,i,j,k/l)},d=function(a,b){var c,d,e,f,g,h,i,j,k;if(e=!1,k=!0,d=a.document,j=d.documentElement,c=d.addEventListener?"addEventListener":"attachEvent",i=d.addEventListener?"removeEventListener":"detachEvent",h=d.addEventListener?"":"on",f=function(c){return"readystatechange"!==c.type||"complete"===d.readyState?(("load"===c.type?a:d)[i](h+c.type,f,!1),!e&&(e=!0)?b.call(a,c.type||c):void 0):void 0},g=function(){var a;try{j.doScroll("left")}catch(b){return a=b,void setTimeout(g,50)}return f("poll")},"complete"!==d.readyState){if(d.createEventObject&&j.doScroll){try{k=!a.frameElement}catch(l){}k&&g()}return d[c](h+"DOMContentLoaded",f,!1),d[c](h+"readystatechange",f,!1),a[c](h+"load",f,!1)}},a._autoDiscoverFunction=function(){return a.autoDiscover?a.discover():void 0},d(window,a._autoDiscoverFunction)}).call(this);/**
* The function is replacing the div with inputs fields
* that will have the option to upload multiple images.
*/
function UploadMultipleFilesInitialize() {
$('.multiple-images-upload').each( function() {
var $that = $(this);
$that.id = $that.attr('id');
$that.websiteID = $that.data('websiteId');
$that.text = $that.data('text');
$that.tooltip = $that.data('tooltip');
$that.mb = $that.data('mb') ? $that.data('mb') : 50;
$that.fileKind = { kind : $that.data('file-kind') ? $that.data('file-kind') : 1 };
$that.firstImageBig = $that.data('first-image-big') ? true : false ;
$that.callBackUpdateFunction = $that.data('call-back-update-function') ? $that.data('call-back-update-function') : false ;
$that.acceptedImages = '.jpeg, .jpg, .png, .gif, .bmp';
$that.acceptedVideos = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
switch ( $that.fileKind.kind ) {
case 1:
$that.mb = 50;
$that.fileKind.acceptedFiles = $that.acceptedImages;
break;
case 2:
$that.mb = 100;
$that.fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
$that.fileKind.previewStatic = 'glyphicon-facetime-video';
break;
case 3:
$that.mb = 100;
$that.fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp, .mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
break;
}
var html = '<div id="'+$that.id+'__multipleImagesUploadContaner" class="form-group fileUploadBox">';
if ( $that.text.length ) {
html += '<label for="'+$that.id+'">'+$that.text+'</label>';
}
if ( $that.tooltip ) {
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip-desk" title="'+$that.tooltip+'"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
html += '<div class="input-group">';
html += '<input type="hidden" class="form-control file-upload-input-field" name="'+$that.id+'" id="'+$that.id+'" value="'+$that.val()+'">';
html += '<div class="input-group-btn btn-group-sm">';
var title = translations.fileSizeLimit.replace('{{mb}}',$that.mb) + ' ' + translations.fileTypesLimit.replace('{{acceptedFiles}}',$that.fileKind.acceptedFiles);
html += '<span class="btn btn-default fake-button" aria-label="Upload" id="'+$that.id+'_fakeButton"><i class="glyphicon glyphicon-upload"></i> '+translations.upload+'</span>';
html += '<button type="button" class="btn btn-default" aria-label="Upload" id="'+$that.id+'_uploadFile" data-rel="tooltip-desk" title="'+title+'"><i class="glyphicon glyphicon-upload"></i> '+translations.upload+'</button>';
html += '<div id="'+$that.id+'_progressBar" class="progress pos-rel" data-percent="0%"><div class="progress-bar" style="width:0%;"></div><div id="'+$that.id+'_cancelBtn" class="progress-cancel" title="Cancel Upload"><i class="fa fa-ban"></i></div></div>';
html += '</div>';
html += '</div>';
html += '<ul id="'+$that.id+'_previewContainer" data-first-image-big="'+$that.firstImageBig+'" class="ace-thumbnails clearfix multiple-images-preview-container"></ul>';
html += '</div>';
$that.replaceWith(html);
var mi = {
id : $that.id,
UploadContaner : $('#'+$that.id+'__multipleImagesUploadContaner'),
input : $('#'+$that.id),
images: getImages(),
previewContainer : $('#'+$that.id+'_previewContainer'),
progressbar: new UploadFilesProgressbar( '#'+$that.id+'_progressBar' ),
btns : {
upload : $('#'+$that.id+'_uploadFile'),
preview : $('#'+$that.id+'_preview'),
cancel : $('#'+$that.id+'_cancelBtn')
}
}
mi.btns.upload.click(function() {
$(this).tooltip('hide');
});
syncPreview();
addSortableAbility();
addFileUploadAbility();
/**
* The function sync the images array (`mi.images`) and the preview container.
*/
function syncPreview() {
mi.previewContainer.empty();
$.each(mi.images, function( index, image ) {
var extension = image.n.split("?")[0].split('.').pop();
var url = image.n;
var customData = '';
var mediaType = '';
if (isVideo(image.n)) {
customData  = 'data-colorbox-iframe="true" ';
customData += 'data-colorbox-width="100%" ';
customData += 'data-colorbox-height="100%"';
var thumbnail = image.n.replace('.'+extension,'-thumbnail.jpg');
mediaType = 'video';
image.t = thumbnail;
} else {
url = image.n.replace("normal_", "1600_");
}
var $li = $('<li><a href="'+ url +'" data-rel="colorbox" '+ customData +' class="edit-image-btn"><img width="100" height="100" src="'+ image.t +'" /></a><div class="tools tools-bottom in"><a href="javascript:void(0);" class="image-delete-btn" title="'+translations.remove+'"><i class="ace-icon fa fa-times red"></i></a></div></li>').appendTo(mi.previewContainer);
$li.find('.image-delete-btn').click(function() {
deleteImage(this);
});
$li.data('n',image.n);
$li.data('file-type',mediaType);
$li.data('t',image.t);
ColorboxInitial('.multiple-images-preview-container [data-rel="colorbox"]');
if ( $that.firstImageBig ) {
replaceFirstImageSize();
}
});
/**
* When the user is dragging images in some
* modules we need to call the callback function
* for example in E-commerce we need to add the first image
* ribbon.
* Source of the solution https://stackoverflow.com/a/912642
*/
var fn = window[$that.callBackUpdateFunction];
if ( typeof fn === 'function') fn();
save();
}
/**
* The function order the images array related to jQuery Sortable.
*/
function orderImages() {
mi.images = [];
mi.previewContainer.find('li').each( function( index, li ) {
$li = $(li);
mi.images.push({
n: $li.data('n'),
t: $li.data('t'),
mediaType: $li.data('file-type')
});
});
/**
* When the user is dragging images in some
* modules we need to call the callback function
* for example in E-commerce we need to add the first image
* ribbon.
* Source of the solution https://stackoverflow.com/a/912642
*/
var fn = window[$that.callBackUpdateFunction];
if ( typeof fn === 'function') fn();
save();
}
/**
* The function save changes by updating the upload images hidden input value.
*/
function save() {
var str = JSON.stringify(mi.images);
str = encodeURIComponent(str);
mi.input.val(str).trigger('change');
}
/**
* Check if the file is video
* @param {String} - file path
* @return {Boolean} - true if the file is a video
* @return {Boolean} - false if the file is not a video
*/
function isVideo( path ) {
var extension = path.split("?")[0].split('.').pop();
if ($that.acceptedVideos.indexOf(extension) >= 0) return true;
return false;
}
/**
* The function get the images from the hidden input and convert them to an objects array.
*/
function getImages() {
if ( $that.val().length === 0 ) return new Array();
var images = decodeURIComponent($that.val());
images = JSON.parse(images);
return images;
}
/**
* The function delete an image by remove it from the Images Array.
*/
function deleteImage( button ) {
var index = $(button).closest('li').index();
mi.images.splice(index, 1);
syncPreview();
}
/**
* The function is replacing the first image
* size from 100 to 400 so the preview image will
* look good.
*/
function replaceFirstImageSize() {
var $images = mi.previewContainer.children().find('img');
if ( $images.length == 0 ) return;
$.each($images, function( index, image ) {
if ( $(image).attr('src').indexOf('100_') > -1 ) {
$(image).attr('src',$(image).attr('src').replace('100_','400_'));
}
});
$images.first().attr('src',$images.first().attr('src').replace('100_','400_'));
}
/**
* The function add Sortable ability to the images container.
*/
function addSortableAbility() {
/**
* Sortable Initialize
* Documentation : http://api.jqueryui.com/sortable/
*/
mi.previewContainer.sortable({
opacity: 0.8,
revert: true,
forceHelperSize: true,
placeholder: 'multiple-images-placeholder',
cancel: '.multiple-images-preview-container .tools a',
forcePlaceholderSize: true,
tolerance: 'pointer',
helper : 'clone',
update: function(event, ui) {
/**
* if the tool has a data attribute
* `data-first-image-big="true"` then we need to
* update the first image size to 400
*/
if ( $that.firstImageBig ) {
replaceFirstImageSize();
}
orderImages();
}
});
mi.previewContainer.disableSelection();
/**
* Fix a bag - When scrolling down a bit, the helper element do not displayed.
* http://stackoverflow.com/questions/2451528/jquery-ui-sortable-scroll-helper-element-offset-firefox-issue
*/
mi.previewContainer.css({ overflow: 'auto' });
}
/**
* The function add Multiple Upload Files ability to the upload button.
*/
function addFileUploadAbility() {
/**
* DropzoneJS Initialize
* Documentation : http://www.dropzonejs.com/
*/
mi.btns.upload.dropzone({
url: "/versions/"+versionNUM+"/wizard/uploadFile.php",
maxFilesize: $that.mb,
parallelUploads: 4,
createImageThumbnails: false,
maxThumbnailFilesize: 1.5,
params: {
w: $that.websiteID
},
acceptedFiles: $that.fileKind.acceptedFiles,
previewsContainer: false,
dictInvalidFileType: translations.fileTypesErrorMsg.replace('{{acceptedFiles}}',$that.fileKind.acceptedFiles),
dictResponseError: translations.badRequest,
init: function () {
var dropzone = this;
mi.btns.cancel.click( function() {
dropzone.removeAllFiles(true);
});
},
addedfile: function (file, xhr, formData) {
mi.progressbar.reset();
mi.progressbar.show();
mi.progressbar.autoIncrease = false;
if ( topWindow.WizardUndoRedoHandler ) topWindow.WizardUndoRedoHandler.buttonsDisable();
},
totaluploadprogress: function ( progress, totalBytes, totalBytesSent ) {
/**
* DropzoneJS call to `totaluploadprogress` with `progress=100` for every
* file that finished uploaded. So I add this condition to prevent from the
*  Progress-bar to go back to 60% every time because we Auto-increase it.
*/
if ( mi.progressbar.autoIncrease ) return;
progress = progress * 0.6;
progress = Math.ceil(progress);
mi.progressbar.update(progress);
if ( progress >= 60 ) {
mi.progressbar.autoIncrease = true;
mi.progressbar.start( 500 );
}
},
success: function (file, response) {
var s3Obj;
var error = false;
try {
s3Obj = jQuery.parseJSON(response);
if (isVideo(s3Obj.n)) {
s3Obj.mediaType = 'video';
} else {
s3Obj.mediaType ='';
}
} catch (e) { error = true; }
if ( error ) {
bootbox.dialog({
title: translations.uploadFailed,
message: translations.uploadFailedInvalidImage,
buttons: {
danger: {
label: translations.ok,
className: "btn-danger btn-sm",
}
}
});
trackJsEvent(true,translations.uploadFailedInvalidImage);
return;
} else {
mi.images.push(s3Obj);
}
/**
* Reset the file from the FRAMEWORD after he finish upload
* We need it because we're using MaxFile setting on DropzoneJS
*/
this.removeFile(file);
},
queuecomplete: function () {
mi.progressbar.finish( function() {
syncPreview();
if ( topWindow.WizardUndoRedoHandler ) topWindow.WizardUndoRedoHandler.buttonsEnable();
});
},
error: function (file, errorMessage, xhr) {
mixPanelEvent(false,"Multiple Images - Upload file error");
mi.progressbar.finish( function() {
bootbox.dialog({
title: translations.uploadFailed,
message: errorMessage,
buttons: {
danger: {
label: translations.ok,
className: "btn-danger btn-sm",
}
}
});
trackJsEvent(true,errorMessage);
});
}
});
}
/**
* if the tool has a data attribute
* `data-first-image-big="true"` then we need to
* update the first image size to 400
*/
if ( $that.firstImageBig ) {
replaceFirstImageSize();
}
/**
* Drop Files Handler - Our upload object placed in a drop-down menu, and we
* like users to be able to drop files to it, also when the drop-down is closed.
* We added the next script to handle that.
*/
(function () {
$('#'+mi.id+'__multipleImagesUploadContaner').on('dragover drop', function ( event ) {
event.preventDefault();
if ( mi.btns.upload.hasClass('multi-upload-drop-file-handler') ) return;
if ( mi.progressbar.$pb.is(':visible') ) return;
mi.btns.upload.addClass('multi-upload-drop-file-handler').appendTo(this);
$('#'+mi.id+'_fakeButton').css('display','inline-block');
mi.btns.upload.on('dragleave.dfh drop.dfh',function( event ){
reset();
mi.btns.upload.off('dragleave.dfh drop.dfh');
});
$(document).off('mousedown.'+mi.id).on('mousedown.'+mi.id, function ( event ) {
reset();
$(document).off('mousedown.'+mi.id);
mi.btns.upload.off('dragleave.dfh drop.dfh');
});
});
/**
* reset the upload object for returning it to his initialized place
*/
function reset() {
mi.btns.upload.removeClass('multi-upload-drop-file-handler').insertBefore($('#'+mi.id+'_progressBar'));
$('#'+mi.id+'_fakeButton').hide();
}
})();
});
}/**
* The function is replacing the div with inputs fields
* that will have the option to upload image.
*/
function UploadSingleFilesInitialize() {
$('.input-file-upload').each( function() {
var $this = $(this);
var id = $this.attr('id');
var websiteID = $this.data('websiteId');
var value = $this.data('value');
var text = $this.data('text');
var scrollPreview = $this.data('scrollPreview');
var tooltip = $this.data('tooltip');
var required = $this.data('required');
var hideRemoveBtn = $this.data('hide-remove-btn');
var library = $this.data('library');
var icons = $this.data('icons');
var uploads = $this.data('uploads');
var premium = $this.data('premium');
var mb = $this.data('mb');	// we overwrite this settings on some files types
var fileKind = { kind : $this.data('fileKind') };
var minWidth = $this.data('minWidth');
var minHeight = $this.data('minHeight');
var minlibraryWidth = $this.data('min-library-width');
var pathType = $this.data('path-type');
var filter = false;
var filter_icon = $this.data('filter');
var cropTool = false;
var cropTool_icon = $this.data('crop');
var logofix = $this.data('logofix');
var imagesType = $this.data('images-type');
var placeHolder = $this.data('place-holder');
var imageFocusPoint = $this.data('image-focus-point') ? true : false;
var noDropDown = $this.data('no-drop-down');
var resizeType = $this.data('resize-type');
switch ( fileKind.kind ) {
case 1:
case 1.1:
mb = 50;
if ( fileKind.kind == 1)		fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp';
else if ( fileKind.kind == 1.1) fileKind.acceptedFiles = '.ico, .png';
fileKind.previewStatic = false;
if ( cropTool_icon != 'disable' ) {
cropTool = true;
}
if ( filter_icon != 'disable' ) {
filter = true;
}
break;
case 2:
mb = 100;
fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv';
fileKind.previewStatic = true;
fileKind.previewStaticIcon = 'glyphicon-facetime-video';
break;
case 3:
mb = 100;
fileKind.acceptedFiles = '.mp3, .wav, .ogg, .flac, .m4a';
fileKind.previewStatic = true;
fileKind.previewStaticIcon = 'glyphicon-music';
break;
case 4:
fileKind.acceptedFiles = '.csv';
fileKind.previewStatic = true;
fileKind.previewStaticIcon = 'glyphicon-file';
break;
case 5:
fileKind.acceptedFiles = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv, .jpeg, .jpg, .png, .gif, .bmp';
mb = 100;
fileKind.previewStatic = UploadFile_GetFileType(value) === 'video';
fileKind.previewStaticIcon = 'glyphicon-facetime-video';
break;
case 9:
fileKind.acceptedFiles = '.jpeg, .jpg, .png, .gif, .bmp';
fileKind.acceptedFiles += ', .wav, .flac, .m4a , .mp3';
fileKind.acceptedFiles += ', .avi, .flv, .wmv, .mov, .mp4, .m4v, .webm';
fileKind.acceptedFiles += ', .doc, .docx, .xls, .xlsx, .ppt, .pptx, .odt, .odp, .pdf, .epub';
fileKind.acceptedFiles += ', .zip';
fileKind.previewStatic = true;
fileKind.previewStaticIcon = 'glyphicon-file';
break;
default:
fileKind.acceptedFiles = false;
fileKind.previewStatic = true;
fileKind.previewStaticIcon = 'glyphicon-file';
}
var x = '';
var margin = '';
$('html[dir=rtl]').length > 0 ? margin = 'margin-right' :  margin = 'margin-left';
if ( premium == 'yes' ) {
x += '<div id="'+id+'_uploadFileContaner" class="form-group premiumFeature">';
x += '<div class="premiumFeatureDesign premiumFeatureMessage  transform-centering" data-rel="tooltip-desk" title="'+translations.businessPackageOnly+'">';
x += '<a class="btn btn-danger btn-sm lockMessage glyphicon glyphicon-lock" data-rel="tooltip-desk"></a>';
x += '</div>';
} else {
x += '<div id="'+id+'_uploadFileContaner" class="form-group fileUploadBox">';
}
if ( text ) {
x += '<label for="'+id+'">'+text;
if ( tooltip ) {
x += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" title="' + tooltip + '"><i class="glyphicon glyphicon-question-sign"></i></a>';
} else {
var title = translations.fileSizeLimit.replace('{{mb}}',mb);
if ( fileKind.acceptedFiles ) {
title += ' ' + translations.fileTypesLimit.replace('{{acceptedFiles}}',fileKind.acceptedFiles);
}
x += ' <a data-rel="tooltip" title="'+title+'" href="#" onclick="return false;"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
x +='</label>';
}
x += '<div class="input-group" style="display: block">';
/**
* If we need only the upload button and the image preview
* we just set data-no-drop-down="true" this will
* build only the preview image, upload button, progress bar
*/
if ( !noDropDown ) {
x += '<input type="hidden" class="form-control file-upload-input-field" name="'+id+'" id="'+id+'" value="'+value+'"'+(required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '')+'>';
x += '<div>';
x += '<div class="input-group-btn btn-group-sm" style="display:flex;">';
x += '<button id="'+id+'_uploadFileoptions" type="button" class="btn btn-default"><span>' + translations.chooseImage + '</span> <li class="fa fa-chevron-down"></li></button>';
x += '<a id="'+id+'_previewStatic" href="'+value+'" data-rel="colorbox" data-colorbox-iframe="true" data-colorbox-width="70%" data-colorbox-height="70%" class="btn btn-primary" style="display:none;"><i data-rel="tooltip-desk" title="'+translations.Preview+'" class="glyphicon '+fileKind.previewStaticIcon+'" aria-hidden="true"></i></a>';
x += '<a id="'+id+'_preview" href="'+value.replace("normal_", "1600_")+'" data-rel="colorbox" class="btn btn-default" style="display:none;padding:0;border:0;' + margin + ':5px"><img data-rel="tooltip-desk" title="'+translations.Preview+'" src="'+value.replace("normal_", "100_")+'" style="width:36px;height:36px;"></a>';
x += '<a id="'+id+'_previewIcon" class="btn btn-default disabled" style="margin:0;display:none;' + margin + ':5px"" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageIcons\',false,\''+minlibraryWidth+'\');"><i></i></a>';
if ( filter == true ) {
x += '<a id="'+id+'_filter" class="btn btn-default" onclick="Filter_OpenModal(\''+id+'\',\''+websiteID+'\');" data-rel="tooltip-desk" title="'+translations.addImageFilters+'" style="display:none;"><i class="fa fa-magic" aria-hidden="true"></i></a>';
}
if ( cropTool == true ) {
x += '<a id="'+id+'_crop" class="btn btn-default" onclick="Crop_OpenModal(\''+id+'\',\''+websiteID+'\');" data-rel="tooltip-desk" title="'+translations.cropTool+'" style="display:none;"><i class="fa fa-crop" aria-hidden="true"></i></a>';
}
if ( imageFocusPoint == true ) {
x += '<a id="'+id+'_imageFocusPoint" class="btn btn-default" onclick="imageFocusPoint_OpenModal(\''+id+'\',\''+websiteID+'\');" data-rel="tooltip-desk" title="'+translations.imageFocusPoint+'" style="display:none;"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-laptop" class="svg-inline--fa fa-phone-laptop fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z"></path></svg></a>';
}
if ( !required && !hideRemoveBtn ) {
x += '<button id="'+id+'_removeBtn" type="button" class="btn btn-danger" style="display:none;" data-rel="tooltip-desk" aria-label="Remove" title="'+translations.remove+'" onclick="RemoveFileFromUpload(\''+id+'\');"><i class="glyphicon glyphicon-remove" aria-hidden="true" title="'+translations.remove+'"></i></button>';
}
x += '<ul id="'+id+'_uploadFileContainer" class="dropdown-menu" style="' + margin + ':-1px;">';
if ( uploads != false ) {
x += '<li id="'+id+'_uploadFileBox">';
x += '<a aria-label="Upload" id="'+id+'_uploadFile" data-rel="tooltip-desk" style="display:block"><i class="glyphicon glyphicon-upload"></i> ' + translations.uploadFromComputer + '</a>';
x += '</li>';
}
if ( library != 'no' ) {
x += '<li>';
if (library == 'imageLive' ) {
x += '<a id="'+id+'_library" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageLibrary\',true,\''+minlibraryWidth+'\');"><i class="fa fa-picture-o"></i> '+(imagesType === 'pattern' ? translations.patterns : translations.library)+'</a>';
}
if (library == 'imageHomepageLive' ) {
x += '<a id="'+id+'_library" class="image-homepage-live" data-search="all" data-id="'+id+'" style="display:block"><i class="fa fa-picture-o"></i> '+(imagesType === 'pattern' ? translations.patterns : translations.library)+'</a>';
}
if (library == 'image' ) {
x += '<a id="'+id+'_library" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageLibrary\',false,\''+minlibraryWidth+'\');"><i class="fa fa-picture-o"></i> ' + translations.chooseFromLibrary + '</a>';
}
if (library == 'videoLive' ) {
x += '<a id="'+id+'_library" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#videoLibrary\',true,\''+minlibraryWidth+'\');"><i class="fa fa-video-camera"></i> '+translations.library+'</a>';
}
if (library == 'video' ) {
x += '<a id="'+id+'_library" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#videoLibrary\',false,\''+minlibraryWidth+'\');"><i class="fa fa-video-camera"></i> '+translations.library+'</a>';
}
x += '</li>';
if ( library == 'imageHomepageLive & videoLive' ) {
x += '<li>';
x += '<a id="'+id+'_library" class="image-homepage-live" data-search="all" data-id="'+id+'" style="display:block"><i class="fa fa-picture-o"></i> '+(imagesType === 'pattern' ? translations.patterns : translations.imagesLibrary)+'</a>';
x += '</li>';
x += '<li>';
x += '<a id="'+id+'_video_library" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#videoLibrary\',true,\''+minlibraryWidth+'\');"><i class="fa fa-video-camera"></i> '+translations.videoLibrary+'</a>';
x += '</li>';
}
}
if ( icons ) {
x += '<li>';
x += '<a id="'+id+'_icons" style="display:block" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageIcons\',false,\''+minlibraryWidth+'\');"><i class="fa fa-list"></i> '+translations.icons+'</a>';
x += '</li>';
}
x += '</ul>';
x += '</div>';
} else {
if ( icons ) {
x += '<input type="hidden" class="form-control file-upload-input-field" name="'+id+'" id="'+id+'" value="'+value+'"'+(required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '')+'>';
x += '<div>';
x += '<div style="display:flex;" class="c-i-container">';
x += '<a aria-label="Upload" id="'+id+'_icons" data-rel="tooltip-desk" style="display:block;" class="btn btn-default btn-sm c-i-input" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageIcons\',false,\''+minlibraryWidth+'\');"><i class="fa fa-list"></i> ' + translations.icons + '</a>';
x += '<a id="'+id+'_previewIcon" class="btn btn-default disabled" style="display:none;border:0;' + margin + ':5px"" onclick="OpenUploadFilesModal(\''+id+'\',\'#imageIcons\',false,\''+minlibraryWidth+'\');"><i></i></a>';
x += '<button id="'+id+'_removeBtn" type="button" class="btn btn-danger btn-sm" style="display:none;" data-rel="tooltip-desk" aria-label="Remove" title="'+translations.remove+'" onclick="RemoveFileFromUpload(\''+id+'\');"><i class="glyphicon glyphicon-remove" aria-hidden="true" title="'+translations.remove+'"></i></button>';
x += '</div>';
} else {
x += '<input type="hidden" class="form-control file-upload-input-field" id="'+id+'" value="'+value+'"'+(required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '')+'>';
x += '<div>';
x += '<div style="display:flex;">';
x += '<a aria-label="Upload" id="'+id+'_uploadFile" data-rel="tooltip-desk" style="display:block;" class="btn btn-default btn-xs"><i class="glyphicon glyphicon-upload"></i> ' + translations.uploadFromComputer + '</a>';
x += '<a id="'+id+'_preview" href="'+value.replace("normal_", "1600_")+'" data-rel="colorbox" class="btn btn-default" style="display:none;padding:0;border:0;' + margin + ':5px"><img data-rel="tooltip-desk" title="'+translations.Preview+'" src="'+value.replace("normal_", "100_")+'" style="width:33px;height:33px;"></a>';
x += '<button id="'+id+'_removeBtn" type="button" class="btn btn-danger btn-xs" style="display:none;" data-rel="tooltip-desk" aria-label="Remove" title="'+translations.remove+'" onclick="RemoveFileFromUpload(\''+id+'\');"><i class="glyphicon glyphicon-remove" aria-hidden="true" title="'+translations.remove+'"></i></button>';
x += '</div>';
}
}
x += '<div id="'+id+'_progressBar" class="progress pos-rel" data-percent="0%"><div class="progress-bar" style="width:0%;"></div><div id="'+id+'_cancelBtn" class="progress-cancel" title="Cancel Upload"><i class="fa fa-ban"></i></div></div>';
x += '</div>';
x += '</div>';
x += '</div>';
$this.replaceWith(x);
var uploadFile = {
id : id,
kind : fileKind,
input : $('#'+id),
progressbar: new UploadFilesProgressbar( '#'+id+'_progressBar' ),
imagesType: imagesType,
resizeType: resizeType,
btns : {
upload : $('#'+id+'_uploadFile'),
library : $('#'+id+'_library'),
filter : $('#'+id+'_filter'),
crop : $('#'+id+'_crop'),
imageFocusPoint : $('#'+id+'_imageFocusPoint'),
logofix : logofix,
icons : $('#'+id+'_icons'),
preview : $('#'+id+'_preview'),
previewIcon : $('#'+id+'_previewIcon'),
previewStatic : $('#'+id+'_previewStatic'),
remove : $('#'+id+'_removeBtn'),
cancel : $('#'+id+'_cancelBtn'),
showOptions: $('#'+id+'_uploadFileoptions')
},
optionsContainer: $('#'+id+'_uploadFileContainer'),
settings: {
obj: $('#'+id+'_settings'),
set: function( name, setting ) {
var s = uploadFile.settings.get();
s[name] = setting;
uploadFile.settings.obj.html(JSON.stringify(s)).trigger('input');
if ( typeof AutoSaveWizard == 'function' ) {
window.reloadPreviewCSS = ReloadPreviewCSS;
AutoSaveWizard(false,true);
}
},
get: function() {
var s = tryParseJSON(uploadFile.settings.obj.val());
if ( !s ) s = {};
return s;
},
reset: function() {
if ( uploadFile.settings.obj.length === 0 ) return;
uploadFile.settings.obj.html(JSON.stringify({}));
}
}
};
if ( !topWindow.uploadFiles ) topWindow.uploadFiles = new Array();
topWindow.uploadFiles[id] = uploadFile;
var displayTimeOut = 2;
var $optionsContainer = topWindow.uploadFiles[id].optionsContainer;
var $showOptions = topWindow.uploadFiles[id].btns.showOptions;
if (topWindow.uploadFiles[id].kind.kind == 1.1) {
$showOptions.find('span').html(translations.chooseIcon);
} else if (topWindow.uploadFiles[id].kind.kind == 9) {
$showOptions.find('span').html(translations.chooseFile);
} else if (topWindow.uploadFiles[id].kind.kind == 3 ) {
$showOptions.find('span').html(translations.chooseAudio);
} else if(topWindow.uploadFiles[id].kind.kind == 2) {
$showOptions.find('span').html(translations.chooseVideo);
}
if (placeHolder != '') 	{
$showOptions.find('span').html(placeHolder);
}
var mouseOverbtn = false;
var mouseOverDiv = false;
function closeOptionContainer() {
if (mouseOverbtn || mouseOverDiv) return;
clearTimeout(displayTimeOut);
displayTimeOut = setTimeout(function() {
$optionsContainer.hide();
$showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
},200);
}
function showOptionContainer() {
clearTimeout(displayTimeOut);
$optionsContainer.show();
$showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
}
$showOptions.on('click',function() {
$showOptions.addClass('ignore-mouse-move-event');
if ($optionsContainer.is(':visible')) {
$optionsContainer.hide();
$showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
} else {
$optionsContainer.show();
$showOptions.find('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
}
});
$optionsContainer.on('click',function() {
$optionsContainer.hide();
$showOptions.find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
});
$showOptions.mouseover(function() {
mouseOverbtn = true;
clearTimeout(displayTimeOut);
})
.mouseleave(function() {
mouseOverbtn = false;
closeOptionContainer();
});
$optionsContainer.mouseover(function() {
mouseOverDiv = true;
clearTimeout(displayTimeOut);
showOptionContainer();
})
.mouseleave(function() {
mouseOverDiv = false;
closeOptionContainer();
});
if (id.indexOf('home') >=0 || id.indexOf('logo') >=0 ) $optionsContainer.css(margin,'-2px');
$optionsContainer.css({'margin-top':'-1px','position':'absolute'});
$showOptions.css({'border-radius':'0px'});
topWindow.uploadFiles[id].btns.upload.css({'padding':'4px 12px','width':'100%','cursor':'pointer'});
topWindow.uploadFiles[id].btns.library.css({'padding':'4px 12px','width':'100%','cursor':'pointer'});
topWindow.uploadFiles[id].btns.icons.css({'padding':'4px 12px','width':'100%','cursor':'pointer'});
if ( id.indexOf('topAction_buttonText') >=0 || id.indexOf('home_buttonText') >=0 ) {
topWindow.uploadFiles[id].btns.icons.css({'width':'100px','border-radius': '0px'});
topWindow.uploadFiles[id].btns.previewIcon.css({'border-radius': '0px'});
topWindow.uploadFiles[id].btns.remove.css({'border-radius': '0px'});
topWindow.uploadFiles[id].btns.previewIcon.find('i').css({'margin':'0'})
}
$('#'+id+'_uploadFileContaner').mousedown(function() {
if (typeof scrollToPointInPreview == 'function' && scrollPreview != '') {
window.scrollPreview = scrollPreview;
scrollToPointInPreview();
}
});
topWindow.uploadFiles[id].input.on('change', function() {
topWindow.uploadFiles[id].settings.reset();
/**
* Sometimes the hidden input field is `required`. If the user try to submit the form
* without upload a file the message "This field is required" appear, we add this event
* to remove it after the user upload a file.
*/
topWindow.uploadFiles[id].input.valid();
});
if ( value != '') {
if ( value.indexOf('site123-image-icon') != -1 ) {
UpdateImagePreview(id, { icon: value });
} else {
UpdateImagePreview(id, { normal: value, tiny: value.replace("normal_", "100_"), patterns: uploadFile.settings.get().type == 'patterns' });
}
}
/**
* Drop Files Handler - Our upload object placed in a drop-down menu, and we
* like users to be able to drop files to it, also when the drop-down is closed.
* We added the next script to handle that.
*/
(function () {
$('#'+id+'_uploadFileContaner').on('dragover drop', function ( event ) {
event.preventDefault();
if ( uploadFile.btns.upload.hasClass('drop-file-handler') ) return;
if ( uploadFile.progressbar.$pb.is(':visible') ) return;
uploadFile.btns.upload.addClass('drop-file-handler').appendTo(this);
uploadFile.btns.upload.on('dragleave.dfh drop.dfh',function( event ){
reset();
uploadFile.btns.upload.off('dragleave.dfh drop.dfh');
});
$(document).off('mousedown.'+id).on('mousedown.'+id, function ( event ) {
reset();
$(document).off('mousedown.'+id);
uploadFile.btns.upload.off('dragleave.dfh drop.dfh');
});
});
/**
* reset the upload object for returning it to his initialized place
*/
function reset() {
uploadFile.btns.upload.removeClass('drop-file-handler').appendTo($('#'+id+'_uploadFileBox'));
}
})();
UploadSingleFile(id,websiteID,pathType,mb,fileKind,minWidth,minHeight);
});
}/**
* The function initializing the system color pickers.
*/
function ColorPickerInitialize() {
$('.colorPalette').each(function(){
var $this 		= $(this);
var id 			= $this.attr('id');
var value 		= $this.data('value');
var text 		= $this.data('text');
var hideText 	= $this.data('hide-text');
var tooltip 	= $this.data('tooltip');
var required	= $this.data('required');
var customClass	= $this.data('custom-class');
if ( !customClass ) customClass = 'inputReloadPreviewCSS';
var validator = 'data-rule-color-pattern="true"' + (required ? ' required data-msg-required="' + translations.fieldRequired + '"' : '');
var html = '';
html += '<div class="row">';
html += '<div class="col-xs-12">';
html += '<div class="form-group">';
if ( !hideText ) {
html += '<label for="'+id+'">'+text+'</label>';
if ( tooltip ) {
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" title="'+tooltip+'"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
html += '<br>';
}
html += '<input type="text" class="form-control '+customClass+' spectrumField" name="'+id+'" id="'+id+'" value="'+value+'" spellcheck="false" style="direction:ltr;width:90px;" '+validator+'>';
html += '</div>';
html += '</div>';
html += '</div>';
$this.replaceWith(html);
var palette = [
['#333333','#ffffff','#f05f40','#0088cc','#169fe6'],
['#7cb600','#fa5b0f','#495d7f','#ffb400','#fcab55'],
['#bfa980','#6957af','#c62020','#c71c77','#74aea1'],
['#784e3d','#911938','#707070','#404040','#37b6bd'],
['#b3c211','#3b6e40']
];
if ( id === 'global_main_color' ) palette[0].splice(1,1);
var $input = $('#'+id);
var settings = {
color: value,
showPalette: true,				// Show the Palette
showPaletteOnly: false,			// Don't show only the Palette
togglePaletteOnly: false,		// Don't show the "less" & "more" buttons
hideAfterPaletteSelect: true,
allowEmpty: false,
showInput: true,
clickoutFiresChange: true,
showSelectionPalette: true,
maxSelectionSize: 5,
localStorageKey: 'site123.basic',
preferredFormat: 'hex',
togglePaletteMoreText: translations.spectrumMore,
togglePaletteLessText: translations.spectrumLess,
chooseText: translations.spectrumChoose,
cancelText: translations.spectrumCancel,
palette: palette,
change: function( color ) {
/**
* Block White Color - We don't like the users to choose a white
* color for there main website color, if they choose it a lot
* of elements design got broken, unseen, etc. so we block it.
*/
if ( $input.get(0).id === 'global_main_color' ) {
if ( $input.val() === '#ffffff' ) {
$input.spectrum('set','#4a90e2');
bootbox.alert({
message: translations.mainColorWhiteAlert
});
}
}
if ( typeof AutoSaveWizard == 'function' ) {
window.reloadPreviewCSS = ReloadPreviewCSS;
AutoSaveWizard(false,true);
}
},
show: function( color ) {
/**
* Wizard tabs using `stopPropagation()` event, so the color
* picker is not closed when clicking on them (home, pages, etc).
* To handle it we added our own event.
*/
$('#wizardBox .wizardSideTabs')
.off('mousedown.site123.spectrum')
.one('mousedown.site123.spectrum', function ( event ) {
$input.spectrum('hide');
}
);
}
};
/**
* Homepage Background Color - This field is allowed to be empty because it is not required and also
* the homepage background color defined by simple color or by gradients that is a different field
*/
if ( id === 'home_background_color' ) {
settings.allowEmpty = true;
}
/**
* Spectrum Color Picker Initialize
* Documentation : https://bgrins.github.io/spectrum/
*/
$input.spectrum(settings);
$input.on("dragstop.spectrum",function(e, color) {
$input.spectrum("set",color).trigger('change');
});
});
$('.sliderInput').each(function(){
var $this 		= $(this);
var id 			= $this.attr('id');
var value 		= $this.data('value');
var text 		= $this.data('text');
var tooltip 	= $this.data('tooltip');
var customClass	= $this.data('custom-class');
var maxVal		= $this.data('max');
var minVal		= $this.data('min');
var numberKind  = $this.data('number-kind');
var design  	= $this.data('design') ? $this.data('design') : 'oneLine';
if ( !customClass ) customClass = 'inputChangeLive';
var html = '';
html += '<div class="form-group s123-slider">';
if (design=='oneLine') {
html += '<div class="row" style="display:flex;align-items:center;">';
html += '<div class="col-xs-4" style="display: flex;">';
html += '<label for="'+id+'" style="font-size: 11px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">'+text+'</label>';
if ( tooltip && tooltip.length > 0 ) {
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" title="'+tooltip+'"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
html += '</div>';
html += '<div class="col-xs-6">';
html += '<span id="'+id+'_slider" class="ui-sliders ui-slider-simple ui-slider-dark"></span>';
html += '</div>';
html += '<div class="col-xs-2">';
html += '<div id="'+id+'_view" class="label label-info">';
html += '<input type="text" value="'+value+'" class="slider-input-value">';
html += '</div>';
html += '<input type="text" class="form-control hidden '+customClass+'" id="'+id+'" name="'+id+'" value="'+value+'" placeholder="Place Holder Test" data-scroll-preview="#page-top">';
html += '</div>';
html += '</div>';
}
if (design=='twoLines') {
html += '<div class="row">';
html += '<div class="col-xs-12" style="display: flex;">';
html += '<label for="'+id+'" style="font-size: 15px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">'+text+'</label>';
if ( tooltip && tooltip.length > 0 ) {
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" title="'+tooltip+'"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
html += '</div>';
html += '</div>';
html += '<div class="row" style="display:flex;align-items:center;">';
html += '<div class="col-xs-9">';
html += '<span id="'+id+'_slider" class="ui-sliders ui-slider-simple ui-slider-dark"></span>';
html += '</div>';
html += '<div class="col-xs-3">';
html += '<div id="'+id+'_view" class="label label-info">';
html += '<input type="text" value="'+value+'" class="slider-input-value">';
html += '</div>';
html += '<input type="text" class="form-control hidden '+customClass+'" id="'+id+'" name="'+id+'" value="'+value+'" placeholder="Place Holder Test" data-scroll-preview="#page-top">';
html += '</div>';
html += '</div>';
}
html += '</div>';
$this.replaceWith(html);
$('#'+id+'').on('change',function() {
var $input = $(this);
var id = $input.attr('id');
var val = $input.val();
if (val=='') { //The field can't be empty (it's a bug if he is)
val = 0;
}
$('#'+id+'_slider').slider('value',val);
$('#'+id+'_view .slider-input-value').val(val);
});
/**
* Add on event to change the value using only keyboard
*/
$('#'+id+'_view .slider-input-value').on('input',function() {
var $this = $(this);
switch ( numberKind ) {
case 1:
if ( minVal < 0 ) {
$this.val($this.val().replace(/(?!^-)[^0-9]/g,""));
} else {
$this.val($this.val().replace(/[^0-9]/g,""));
}
break;
default:
$this.val($this.val().replace(/[^0-9.]/g,""));
break;
}
clearTimeout(this.finishedTyping);
this.finishedTyping = setTimeout( function() {
if ( !$.isNumeric($this.val()) ) return;
if ( $.isNumeric($this.val()) && parseInt($this.val()) > maxVal ) $this.val(maxVal);
if ( $.isNumeric($this.val()) && parseInt($this.val()) < minVal ) $this.val(minVal);
$('#'+id+'').val($this.val()).trigger('change');
},500);
}).on('blur', function() {
if ( !$.isNumeric($(this).val()) ) $(this).val($('#'+id+'').val());
});
var $input = $('#'+id+'_slider');
switch (numberKind) {
case 1:
var step = 1;
break;
case 2:
var step = 0.1;
break;
case 3:
var step = 0.01;
break;
}
/**
* jQuery UI Slider Initialize
* Documentations: https://api.jqueryui.com/slider/
*/
$input.css({width:'100%', 'float':'left', margin:'0px'})
.slider({
value: value,
range: "min",
animate: true,
max: maxVal,
min: minVal,
step: step,
change: function( event, ui ) {
},
start: function( event, ui ) {
if ( id === 'homepage_layout_height' ) {
window.holdWizardSave = true;
}
},
stop: function( event, ui ) {
if ( id === 'homepage_layout_height' ) {
window.holdWizardSave = false;
$('#'+id).val(ui.value).trigger('input');
}
},
slide: function( event, ui ) {
$('#'+id+'_view .slider-input-value').val(ui.value);
$( '#'+id+'' ).val(ui.value).trigger('input');
}
});
});
$('.numberInput').each(function() {
var $this 		= $(this);
var id 			= $this.attr('id');
var value 		= $this.data('value');
var text 		= $this.data('text');
var tooltip 	= $this.data('tooltip');
var customClass	= $this.data('custom-class');
var scrollPreview	= $this.data('scroll-preview');
var label		= $this.data('label');
if ( !customClass ) customClass = 'inputChangeReload';
if ( !scrollPreview ) scrollPreview = '';
var html = '';
if ( label ) html += '<label for="'+id+'">'+text+'</label>';
html += '<input type="number" placeholder="'+text+'" class="form-control '+customClass+'" name="'+id+'" id="'+id+'" value="'+value+'" data-scroll-preview="'+scrollPreview+'">';
$this.replaceWith(html);
});
}/**
* The function initializing the system fonts select.
*/
function FontsSelectInitialize() {
/**
* Premium Fonts Limitations - We decide to limit the number of fonts for Free Websites.
* Note: The limitation start only from the day we upload so old customers that on Free
* Package will still see all the fonts available.
*/
if ( parseInt(topWindow.websiteID) > 1 ) {
var isFontsLimited = OpenPremiumFeatures(topWindow.packageNUM) == 1;
} else {
var isFontsLimited = false;
}
/**
* Set an object that include all the system fonts.
*
* Note: In order to check if the font have italic we sent requests to the following url
* `https://fonts.googleapis.com/css?family={{font name}}:italic`` and that returned us the style
* if the font have italic so we converted the fonts to jsons with properties
*
* Documentation: https://developers.google.com/fonts/docs/getting_started
*/
var systemFonts = {
Latin : [
{name:"Open Sans",italic:1},
{name:"Lato",italic:1},
{name:"Josefin Sans",italic:1},
{name:"Dancing Script",italic:0},
{name:"Caveat",italic:0},
{name:"Amita",italic:0},
{name:"Raleway",italic:1},
{name:"Lobster Two",italic:1},
{name:"Orbitron",italic:0},
{name:"Source Code Pro",italic:0},
{name:"Allan",italic:0},
{name:"Rosario",italic:1},
{name:"Creepster",italic:0},
{name:"Unkempt",italic:0},
{name:"Playfair Display",italic:1},
{name:"Work Sans",italic:0},
{name:"Alegreya Sans",italic:1},
{name:"Alegreya",italic:1},
{name:"Fira Sans",italic:1},
{name:"Inconsolata",italic:0},
{name:"Source Serif Pro",italic:0},
{name:"Source Sans Pro",italic:1},
{name:"Lora",italic:1},
{name:"Karla",italic:1},
{name:"Neuton",italic:1},
{name:"Poppins",italic:1},
{name:"Merriweather",italic:1},
{name:"Roboto Slab",italic:0},
{name:"Anonymous Pro",italic:1},
{name:"Libre Baskerville",italic:1},
{name:"Archivo Narrow",italic:1},
{name:"Crimson Text",italic:1},
{name:"Montserrat",italic:1},
{name:"Old Standard TT",italic:1},
{name:"Chivo",italic:1},
{name:"Domine",italic:0},
{name:"Cardo",italic:1},
{name:"Bitter",italic:1},
{name:"Arvo",italic:1},
{name:"PT Serif",italic:1},
{name:"Josefin Slab",italic:1},
{name:"Vollkorn",italic:1},
{name:"Abril Fatface",italic:0},
{name:"Ubuntu",italic:1},
{name:"Roboto",italic:1},
{name:"Pacifico",italic:0},
{name:"Amatic SC",italic:0},
{name:"Cabin",italic:1},
{name:"Knewave",italic:0},
{name:"Linden Hill",italic:1},
{name:"Prociono",italic:0},
{name:"Goudy Bookletter 1911",italic:0},
{name:"Sorts Mill Goudy",italic:1},
{name:"Sniglet",italic:0}
],
Cyrillic : [
{name:"Anonymous Pro",italic:1},
{name:"Arimo",italic:1},
{name:"Comfortaa",italic:0},
{name:"Cormorant",italic:1},
{name:"Cormorant Garamond",italic:1},
{name:"Cormorant Infant",italic:1},
{name:"Cormorant SC",italic:0},
{name:"Cormorant Unicase",italic:0},
{name:"Cousine",italic:1},
{name:"Cuprum",italic:1},
{name:"El Messiri",italic:0},
{name:"Exo 2",italic:1},
{name:"Fira Mono",italic:0},
{name:"Fira Sans",italic:1},
{name:"Istok Web",italic:1},
{name:"Jura",italic:0},
{name:"Lora",italic:1},
{name:"Merriweather",italic:1},
{name:"Noto Sans",italic:1},
{name:"Noto Serif",italic:1},
{name:"Open Sans",italic:1},
{name:"PT Sans",italic:1},
{name:"PT Sans Caption",italic:0},
{name:"PT Sans Narrow",italic:0},
{name:"PT Serif",italic:1},
{name:"PT Serif Caption",italic:1},
{name:"Philosopher",italic:1},
{name:"Play",italic:0},
{name:"Playfair Display",italic:1},
{name:"Playfair Display SC",italic:1},
{name:"Roboto",italic:1},
{name:"Roboto Condensed",italic:1},
{name:"Roboto Mono",italic:1},
{name:"Roboto Slab",italic:0},
{name:"Rubik",italic:1},
{name:"Scada",italic:1},
{name:"Tinos",italic:1},
{name:"Ubuntu",italic:1},
{name:"Ubuntu Mono",italic:1}
],
Arabic : [
{name:"Amiri",italic:1},
{name:"Scheherazade",italic:0},
{name:"Amiri",italic:1},
{name:"Aref Ruqaa",italic:0},
{name:"Cairo",italic:0},
{name:"Changa",italic:0},
{name:"El Messiri",italic:0},
{name:"Lemonada",italic:0},
{name:"Mada",italic:0},
{name:"Mirza",italic:0}
],
Tamil : [
{name:"Arima Madurai",italic:0},
{name:"Catamaran",italic:0},
{name:"Hind Madurai",italic:0}
],
Hebrew : [
{name:"Arimo",italic:1},
{name:"Tinos",italic:1},
{name:"Alef",italic:0},
{name:"Rubik",italic:1},
{name:"Frank Ruhl Libre",italic:0},
{name:"David Libre",italic:0},
{name:"Heebo",italic:0},
{name:"Assistant",italic:0},
{name:"Cousine",italic:1},
{name:"Miriam Libre",italic:0}
],
Global : [
{name:"Arial",italic:0},
{name:"Times New Roman",italic:0},
{name:"Comic Sans MS",italic:0},
{name:"Impact",italic:0},
{name:"Tahoma",italic:0},
{name:"Verdana",italic:0},
{name:"Courier New",italic:0}
]
};
if ( isFontsLimited ) {
var website_language = topWindow.$('#language').length !== 0 ? topWindow.$('#language').val() : '';
if ( website_language === 'he' ) {
var websiteFonts = { Hebrew: systemFonts.Hebrew.slice(0,10) };
} else if ( website_language === 'ar' || website_language.substring(0,3)  === 'ar-' ) {
var websiteFonts = { Arabic: systemFonts.Arabic.slice(0,10) };
} else {
var websiteFonts = {
Free : [
{name:"Roboto",italic:1},
{name:"Open Sans",italic:1},
{name:"Lato",italic:1},
{name:"Montserrat",italic:1},
{name:"Roboto Condensed",italic:1},
{name:"Source Sans Pro",italic:1},
{name:"Raleway",italic:1},
{name:"Merriweather",italic:1},
{name:"PT Sans",italic:1},
{name:"Roboto Slab",italic:0},
{name:"Poppins",italic:1},
{name:"Noto Sans",italic:1},
{name:"Ubuntu",italic:1},
{name:"Playfair Display",italic:1},
{name:"Roboto Mono",italic:1}
]
};
}
} else {
var websiteFonts = systemFonts;
}
$('.fontSelectNew').each(function(){
var $this 		= $(this);
var id 			= $this.attr('id');
var value 		= $this.data('value');
var text 		= $this.data('text');
var tooltip 	= $this.data('tooltip');
var italicElID 	= $this.data('italic-el-id');
var demoSelector= $this.data('demo-selector');
var fontSelectNew = new s123fontsSelect();
fontSelectNew.init({
$container: $(this).parent(),
$originalEl: $(this),
websiteFonts: websiteFonts,
isFontsLimited: isFontsLimited,
id: id,
value: value,
italicElID: italicElID,
demoSelector: demoSelector,
translations: {
text: text,
freeFontsList: translations.freeFontsList,
tooltip: tooltip,
moreFontsUpgradeMsg: translations.moreFontsUpgradeMsg,
fontsSearchNoResult: translations.fontsSearchNoResult,
fontsSearchPlaceHolder: translations.fontsSearchPlaceHolder
}
});
});
$('.fontSelect').each(function(){
var $this 		= $(this);
var id 			= $this.attr('id');
var value 		= $this.data('value');
var text 		= $this.data('text');
var tooltip 	= $this.data('tooltip');
var removeLable = $this.data('remove-label');
var emptyDefault = $this.data('empty-default');
var appendBody 	= $this.data('append-body');
var alwaysOpen  = $this.data('always-open');
var x = '';
if (removeLable!='yes') {
x += '<div class="form-group">';
}
if (removeLable!='yes') {
x += '<label for="global_font">'+text+'</label>';
}
if ( tooltip ) {
x += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" title="'+tooltip+'"><i class="glyphicon glyphicon-question-sign"></i></a>';
}
x += '<select class="chosen-select'+($('html[dir=rtl]').length !== 0 ? ' chosen-rtl' : '')+' form-control inputReloadPreviewCSS" name="'+id+'" id="'+id+'" data-always-open="'+alwaysOpen+'">';
if (emptyDefault=='1') {
x += '<option value="" '+isSelected(value,'')+'>'+translations.DefaultWebsiteFont+'</option>';
}
for ( fontGroup in websiteFonts ) {
if ( isFontsLimited ) {
x += '<optgroup label="'+translations.freeFontsList+'">';
} else {
x += '<optgroup label="'+fontGroup+'">';
}
websiteFonts[fontGroup].forEach( function( font ) {
x += '<option style="font-family:'+font.name+';"  value="'+font.name+'" '+isSelected(value,font.name)+'>'+font.name+'</option>';
});
x += '</optgroup>';
}
x += '</select>';
if (removeLable!='yes') {
x += '</div>';
}
$this.replaceWith(x);
/**
* Premium Fonts Limitations - Free websites can use only fonts we set as free.
*/
$('#'+id).on('chosen:showing_dropdown', function( event, chosenObj ) {
if ( isFontsLimited ) {
if ( chosenObj.chosen.dropdown.find('.more-fonts-upgrade-box').length !== 0 ) return;
chosenObj.chosen.dropdown.append('<div class="more-fonts-upgrade-box" style="padding: 5px"><a class="btn btn-block btn-primary" style="white-space: normal;" onclick="upgradeFeaturesManager.show(\'moreFonts\');">'+translations.moreFontsUpgradeMsg+'</a></div>');
}
});
$('#'+id+'').on('change',function() {
var $input = $(this);
if ( !alwaysOpen ) $input.trigger("chosen:updated");
});
/**
* Google Fonts - Add all the Google Fonts to the system.
* Note: We don't like to load all the fonts all the times for saving performance,
* so we load them only when the user open at lease one fonts select box
*/
$('#'+id).on('chosen:showing_dropdown', function( event, chosenObj ) {
(function () {
if ( $('link.g-f-loaded').length !== 0 ) return;
var link = '<link class="g-f-loaded" href="//fonts.googleapis.com/css?family={{fontsList}}" rel="stylesheet" type="text/css">';
var i = 0;
var fontsList = [''];
for ( fontGroup in websiteFonts ) {
websiteFonts[fontGroup].forEach( function( font ) {
if ($.inArray(font.name, ['Arial', 'Times New Roman', 'Comic Sans MS', 'Impact', 'Tahoma', 'Verdana', 'Courier New'])!='-1') {
return;
}
fontsList[i] += font.name + ':400' + '|';
if ( fontsList[i].length  > 1500 ) fontsList[++i] = '';
});
}
for ( var i = 0 ; i < fontsList.length ; i++ ) {
$('head').append(link.replace("{{fontsList}}", fontsList[i]));
}
})();
});
if (appendBody==true) {
$('#'+id).on('chosen:showing_dropdown', function( event, chosenObj ) {
var rect = $('#'+id+'_chosen')[0].getBoundingClientRect();
var chosen = $('#'+id+'_chosen').find('.chosen-drop');
var chosenHeight = chosen.height();
if (rect.top+rect.height+chosenHeight>$(window).height()) {
var chosenTop = rect.top-chosenHeight;
} else {
var chosenTop = rect.top+rect.height;
}
chosen.css({
position: 'fixed',
left:rect.left,
top:chosenTop,
width:rect.width
});
/*
$('#'+id).scrollParent().one('scroll', function(event){
console.log(2222);
$('#'+id).trigger('chosen:close');
});
*/
});
}
});
/**
*
*/
function isSelected(existValue,value) {
if (existValue==value) {
return 'selected';
}
}
}/**
* The class will add the following ability:
*
* 1. Sortable items.
* 2. Delete item.
*
* Note: not all modules have the following settings:
*
* 1. `settings.noItemsSelector` - this is the no items message "Still no items" selector
* modules like Store, Food delivery has categories so they don't have this option.
*
* 2. `settings.sortable` - this is the sortable ability for the items items.php page,
* modules like Blog, Events don't have the ability to sort the items.
*/
function ModulesItemsHandler( settings ) {
var mih = this;
this.websiteID = settings.websiteID;
this.moduleID = settings.moduleID;
this.moduleTypeNUM = settings.moduleTypeNUM;
this.itemSelector = settings.itemSelector;
this.noItemsMessage = settings.noItemsSelector ? $(settings.noItemsSelector) : '';
this.$sortable = settings.sortable ? $(settings.sortable.selector) : '';
this.buttons = settings.buttons;
/**
* No items handler - when the page is loading and there is no items
* the `itemSelector.length` will be 0
*/
if ( this.noItemsMessage.length > 0 ) {
if ( $(this.itemSelector).length == 0 ) {
this.noItemsMessage.show();
$(this.itemSelector).closest('table').hide();
}
}
/**
* Items Click Handler - Redirect the user to a page when clicking on an item.
*/
if ( settings.itemsClick ) {
var $items = $(this.itemSelector).find(settings.itemsClick.selector);
$items.css({ cursor: 'pointer'});
/* fire the callback function when the parent is receiving a clicking event of it's child item */
$items.off('click').click(function( event ) {
settings.itemsClick.callback.call(this,event);
});
}
if ( this.$sortable.length > 0 ) {
if ( window.location.search.indexOf('q=') !== -1 ) {
$('.mis-btn-drag').hide();
} else {
this.$sortable.sortable({
opacity: 0.8,
revert: true,
delay: 100,
forceHelperSize: true,
placeholder: 'draggable-placeholder',
forcePlaceholderSize: true,
tolerance: 'pointer',
handle: '.mis-btn-drag',
cancel: '',
helper: function( event, item ) {
return '<div style="display:none;">&nbsp;</div>';
},
update: function( event, ui ) {
AjaxQueueManager.add({
url: '/versions/'+versionNUM+'/wizard/modules/updatePlace.php',
data: {
w : mih.websiteID,
moduleID : mih.moduleID,
moduleTypeNUM: mih.moduleTypeNUM,
id: ui.item.data('id'),
prevId: ui.item.prev().data('id')
},
done: function( data ) {
gritter_update();
AjaxQueueManager.start('callback');
}
});
if ( AjaxQueueManager.ready ) AjaxQueueManager.start('init');
}
});
}
}
if ( !this.buttons ) return;
if ( this.buttons.delete && !this.buttons.moreOptions ) {
buttons_delete_init();
}
if ( this.buttons.moreOptions ) {
buttons_visible_status_init();
$('.s123-more-option-btn').off('click').click(function( event ) {
var $itemMoreOptionBtn = $(this);
var $itemMoreOptionMenu = $itemMoreOptionBtn.parent().find($('.item-more-option-menu')).clone();
/**
* Bootstrap's Popovers Plugin Initial
* Documentation : http://getbootstrap.com/javascript/#popovers
*/
$itemMoreOptionBtn.popover({
container: 'body',
content: $itemMoreOptionMenu,
html: true,
trigger: 'manual',
template: '<div class="popover mih-dropdown-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
placement: intrface_align
});
$itemMoreOptionBtn.on('shown.bs.popover', function () {
more_options_buttons_init($itemMoreOptionBtn,$itemMoreOptionMenu);
$(document).on('mousedown.mih.popover', function ( event ) {
if ( $(event.target).closest('.popover.mih-dropdown-popover').length === 0 ) {
destroyPopover();
}
});
$(window).one('blur.mih.popover', function( event ) {
destroyPopover();
});
$itemMoreOptionBtn.scrollParent().one('scroll.mih.popover', function( event ) {
destroyPopover();
});
});
/**
* The function destroy the Popover and removes event handlers that were attached to it
*/
function destroyPopover() {
/* prevent popover destroy when confirmations popover is open - when the user click on
delete button and hold the mouse down the confirmation stays open and the popover is destroy */
if ( $('.popover.confirmation.in').length !== 0 ) return;
$itemMoreOptionBtn.popover('destroy');
$(document).off('mousedown.mih.popover');
$(window).off('blur.mih.popover');
$(window).off('scroll.mih.popover');
}
$itemMoreOptionBtn.popover('show');
});
/**
* Initialize the duplicate button.
*/
function more_options_buttons_init( $itemMoreOptionBtn, $itemMoreOptionMenu ) {
buttons_edit_init($itemMoreOptionBtn,$itemMoreOptionMenu);
buttons_duplicate_init($itemMoreOptionBtn,$itemMoreOptionMenu);
buttons_visible_init($itemMoreOptionBtn,$itemMoreOptionMenu);
buttons_delete_init($itemMoreOptionBtn,$itemMoreOptionMenu);
/**
* Button Initialize.
*/
function buttons_edit_init( $itemMoreOptionBtn, $itemMoreOptionMenu ) {
if ( !mih.buttons.moreOptions.buttons.edit ) return;
$itemMoreOptionMenu.find(mih.buttons.moreOptions.buttons.edit.selector).on('click', function( event ) {
settings.itemsClick.callback.call($itemMoreOptionBtn,event);
});
}
/**
* Button Initialize.
*/
function buttons_duplicate_init( $itemMoreOptionBtn, $itemMoreOptionMenu ) {
if ( !mih.buttons.moreOptions.buttons.duplicate ) return;
$itemMoreOptionMenu.find(mih.buttons.moreOptions.buttons.duplicate.selector).on('click', function() {
$itemMoreOptionBtn.popover('destroy');
DuplicateModuleItem({
websiteID : mih.websiteID,
uniqueID : $(this).data('unique-id'),
moduleID : mih.moduleID
});
});
}
/**
* Button Initialize.
*/
function buttons_visible_init( $itemMoreOptionBtn, $itemMoreOptionMenu ) {
if ( !mih.buttons.moreOptions.buttons.visible ) return;
var buttonSelector = mih.buttons.moreOptions.buttons.visible.selector;
$itemMoreOptionMenu.find(buttonSelector).on('click', function( event ) {
$itemMoreOptionBtn.popover('destroy');
var $item = $itemMoreOptionBtn.closest(settings.itemSelector);
var hidden = $item.data('hidden') == 1 ? 0 : 1;
$.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/modules/itemsVisibilityAjax.php",
data: {
w: mih.websiteID,
id: $item.data('id'),
moduleID : mih.moduleID,
moduleTypeNUM : mih.moduleTypeNUM,
hidden : hidden
},
success: function( data ) {
data = tryParseJSON(data);
if ( data.success ) {
$item.data('hidden',hidden);
$item.attr('data-hidden',hidden);
if ( hidden == 0 ) {
$item.find('.visibility-text').html('');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.invisible);
} else {
$item.find('.visibility-text').html(translations.invisible);
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.visible);
}
}
}
});
});
}
}
/**
* The function update the visibility status of each record.
*/
function buttons_visible_status_init() {
if ( !mih.buttons.moreOptions.buttons.visible ) return;
var buttonSelector = mih.buttons.moreOptions.buttons.visible.selector;
$.each($(mih.itemSelector), function( index, item ) {
var $item = $(this);
/* skip rows that already has this span because we are loading more rows on scroll and we
need to prevent adding duplicated elements to existing rows. */
if ( $item.find('.message-status').length > 0 ) return;
if ( $item.data('hidden') == 1 ) {
$item.find('td.edit-item-btn').append('<span class="s123-items-title-label visibility-text label label-warning message-status">' + translations.invisible + '</span>');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.visible);
} else {
$item.find('td.edit-item-btn').append('<span class="s123-items-title-label visibility-text label label-warning message-status"></span>');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.invisible);
}
});
}
}
/**
* Delete Button Initialize - At start the delete button placed outside from the more buttons,
* and not we move it to the new place. We still didn't do it in all the modules so some of them
* still have the delete button outside. So we build that function also outside and we call it
* from two places to initialize the outside delete and the more buttons delete. At the feature
* that button need to work like to duplicate button, inside the more buttons.
*/
function buttons_delete_init( $itemMoreOptionBtn, $itemMoreOptionMenu ) {
if ( !mih.buttons.delete ) return;
var $delete_btn = $itemMoreOptionMenu ?
$itemMoreOptionMenu.find(mih.buttons.delete.selector) :
$(mih.buttons.delete.selector);
if( ace.vars['touch'] ) {
$delete_btn.click(function( event ) {
var $this = $(this);
if ( $delete_btn.data('disabled') ) {
return;
} else {
$delete_btn.data('disabled',true);
}
if ( $itemMoreOptionBtn ) $itemMoreOptionBtn.popover('destroy');
/**
* Bootbox Initialize
* Documentation : http://bootboxjs.com/documentation.html#bb-confirm
*/
bootbox.confirm({
message: '<h4>'+translations.areYouSure+'</h4>',
className: 'mih-buttons-delete-bootbox',
buttons: {
confirm: {
label: translations.yes,
className: 'btn-danger'
},
cancel: {
label: translations.no,
className: 'btn-default'
}
},
callback: function( confirmed ) {
if ( confirmed ) {
deleteItem($this);
}
$delete_btn.data('disabled',false);
}
});
});
} else {
/**
* Bootstrap Confirmation - Initialize the button click event
* Documentation : https://ethaizone.github.io/Bootstrap-Confirmation/
*/
$delete_btn.confirmation({
placement: intrface_align,
title: translations.areYouSure,
btnOkLabel: '<i class="icon-ok-sign icon-white"></i> '+translations.yes,
btnCancelLabel: '<i class="icon-remove-sign"></i> '+translations.no,
popout: true,
singleton: true,
container: 'body',
btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
onConfirm: function() {
deleteItem($(this));
}
});
/* multiple click bug-fix - when the user clicks multiple times on the
delete button the confirmation plugin closed but the `.backdropManaul`
stays, we fix it by removing it manually */
$delete_btn.on('hide.bs.confirmation', function( event ) {
$('.backdropManaul').remove();
});
/**
* Fired when the popover has been made visible to the user. Bootstrap
* Confirmation `popout` property do not works good, its suppose to
* prevent from the Confirmation to be closed when the user click inside
* the box, but its closing it. So we fix it manually.
*/
$delete_btn.one('shown.bs.confirmation', function () {
$('.popover.confirmation.in').off('click').click(function(event) {
event.preventDefault();
event.stopPropagation();
});
});
}
/**
* The function delete the sent item.
*/
function deleteItem( $clicked_delete_btn ) {
if ( $itemMoreOptionBtn ) {
var $btn = $itemMoreOptionBtn;
$itemMoreOptionBtn.popover('destroy');
} else {
var $btn = $clicked_delete_btn;
}
var $item = $btn.closest(mih.itemSelector);
if ( !$item || $.isNumeric($item.data('id')) === 0 ) return false;
var deleteURL = $item.data('custom-delete-url') ? $item.data('custom-delete-url') : '/versions/2/wizard/modules/delete.php';
$.post(deleteURL, {
w : mih.websiteID,
id: $item.data('id'),
moduleID : mih.moduleID,
moduleTypeNUM: mih.moduleTypeNUM,
ajax: 'true'
}).done(function( data ) {
if ( data !== 'success' ) return;
/**
* No items handler - when removing item the `itemSelector.length` will be 2
* and because of <tr> that is the titles of the table
* so we need to hide the table it self
*/
if ( $(mih.itemSelector).length == 2 && mih.noItemsMessage.length > 0 ) {
$(mih.itemSelector).closest('table').fadeOut(0,function() {
$item.remove();
mih.noItemsMessage.fadeIn(250);
ModulesItemsMultiSelect.refresh();
});
} else {
$item.fadeOut(250, function() {
$item.remove();
ModulesItemsMultiSelect.refresh();
});
}
if ( mih.buttons.delete.callback ) mih.buttons.delete.callback.call($item,data);
});
}
}
/**
* Module items multi select initialize
*/
ModulesItemsMultiSelect.init({
websiteID : mih.websiteID,
moduleID : mih.moduleID,
moduleTypeNUM : mih.moduleTypeNUM,
versionNUM : '2',
table : {
selector : '.modules-items-table'
},
noItemsMessage : mih.noItemsMessage
});
}
/**
* Module items multi select class - This class is adding
* the items table ability to select multiple items and delete them.
*/
var ModulesItemsMultiSelect = function() {
var MS = {};
/**
* Initialize - The method is initialing the class.
* @param {object} settings - JSON that contains the variables.
*/
MS.init = function( settings ) {
if ( !settings.table || !settings.websiteID || !settings.moduleID || !settings.moduleTypeNUM ) return;
MS.settings = settings;
MS.websiteID = settings.websiteID;
MS.moduleID = settings.moduleID;
MS.moduleTypeNUM = settings.moduleTypeNUM;
MS.versionNUM = settings.versionNUM;
MS.noItemsMessage = settings.noItemsMessage;
MS.table = {};
MS.$table = $(settings.table.selector);
MS.table.$parent = $(settings.table.selector).parent();
MS.table.$theadTr = $(settings.table.selector + ' thead tr');
MS.table.$tbodyTr = $(settings.table.selector + ' tbody tr');
var checkBoxHTML = MS.generateCheckBoxHTML();
MS.table.$theadTr
.filter('tr:not(:has(.module-items-check-box))')
.prepend('<th class="module-items-check-box">'+checkBoxHTML+'</th>');
MS.table.$tbodyTr
.filter('tr:not(:has(.module-items-check-box))')
.each(function( index, tr ) {
$(tr).prepend('<td class="module-items-check-box">'+checkBoxHTML+'</td>');
});
MS.addManageButtons();
MS.checkBoxesOnChange();
};
/**
* Manage buttons - The method is responsible for adding the
* manage buttons.
*/
MS.addManageButtons = function() {
MS.table.$parent.append(MS.generateManageButtonsHTML());
MS.selectMultiItemsClick();
MS.unselectSelectMultiItemsClick();
MS.deleteSelectedItem();
}
/**
* The method is responsible for deleting all the selected items.
*/
MS.deleteSelectedItem = function() {
/**
* Bootstrap Confirmation - Delete the item on confirmation
* Documentation : https://ethaizone.github.io/Bootstrap-Confirmation/
*/
MS.table.$parent.find('#deleteSeletectItems').confirmation({
placement: 'auto',
title: translations.areYouSure,
btnOkLabel: '<i class="icon-ok-sign icon-white"></i> '+translations.yes,
btnCancelLabel: '<i class="icon-remove-sign"></i> '+translations.no,
popout: true,
singleton: true,
container: 'body',
btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
onConfirm: function() {
var $tr = MS.table.$tbodyTr.filter('.active');
var items = Array();
$tr.each(function( index , tr ) {
var $this = $(tr);
items.push($this.data('id'));
});
items = items.join(',');
if ( items.length > 0 ) {
MS.deleteItems(items);
}
}
});
};
/**
* The method is responsible for selecting the items that is not
* selected.
*/
MS.selectMultiItemsClick = function() {
MS.table.$parent.find('#selectMultiItems').click(function() {
MS.table.$tbodyTr.filter(':not(.active):visible').find('.checkboxInput').each(function() {
var $this = $(this);
$this.prop('checked', true);
$this.closest('tr').addClass('active');
});
MS.table.$parent.find('#selectMultiItems').hide();
MS.table.$parent.find('#unselectMultiItems').show();
MS.updateCounter();
});
};
/**
* The method is responsible for deleting the items.
* @param {string} items - The items we need to delete.
*/
MS.deleteItems = function( items ) {
var request = $.post('/versions/' + MS.versionNUM + '/wizard/modules/delete.php', {
w : MS.websiteID ,
ids: items,
moduleID : MS.moduleID,
moduleTypeNUM: MS.moduleTypeNUM ,
ajax: 'true'
}).done(function( data ) {
if ( data !== 'success' ) return;
items = items.split(',');
$(items).each(function( index, itemID ) {
var $item = MS.table.$tbodyTr.filter('[data-id='+itemID+']');
$item.fadeOut(250,function() {
$item.remove();
if ( index === ($(items).length - 1) ) {
MS.showOrHideNoItemsMessage();
}
});
});
});
}
/**
* The method is showing the no items message
* if the items table is empty.
*/
MS.showOrHideNoItemsMessage = function() {
MS.table.$tbodyTr = MS.$table.find('tbody tr');
MS.table.$parent.find('#moduleItemsMultiSelectButtons').slideUp(600);
if ( MS.table.$tbodyTr.length == 0 && MS.noItemsMessage.length > 0 ) {
MS.$table.fadeOut(0,function() {
MS.noItemsMessage.fadeIn(250);
});
}
};
/**
* The method is responsible for unselecting the selected items.
*/
MS.unselectSelectMultiItemsClick = function() {
MS.table.$parent.find('#unselectMultiItems').click(function() {
MS.table.$tbodyTr.filter('.active:visible').find('.checkboxInput').each(function() {
var $this = $(this);
$this.prop('checked', false);
$this.closest('tr').removeClass('active');
});
MS.table.$theadTr.find('.checkboxInput').prop('checked', false);
MS.table.$parent.find('#unselectMultiItems').hide();
MS.table.$parent.find('#selectMultiItems').show();
MS.hideShowButtons();
MS.updateCounter();
});
};
/**
* The method is responsible for the check boxes on change event.
*/
MS.checkBoxesOnChange = function() {
var $checkBoxInput =  MS.table.$tbodyTr.find('.checkBoxInput');
var $selectAllcheckBoxInput = MS.table.$theadTr.find('.checkboxInput');
$selectAllcheckBoxInput.on('change',function() {
if ( $(this).is(':checked') ) {
MS.table.$parent.find('#selectMultiItems').trigger('click');
MS.hideShowButtons();
} else {
MS.table.$parent.find('#unselectMultiItems').trigger('click');
}
});
$checkBoxInput.on('change',function() {
var $tr = $(this).closest('tr');
if ( $tr.hasClass('active') ) {
$tr.removeClass('active');
} else {
$tr.addClass('active');
}
if ( MS.table.$tbodyTr.filter('.active').length == 0 ) {
$selectAllcheckBoxInput.prop('checked', false);
}
MS.hideShowButtons();
MS.updateCounter();
if ( MS.table.$tbodyTr.find('.checkboxInput:visible:not(:checked)').length === 0 ) {
MS.table.$parent.find('#selectMultiItems').hide();
MS.table.$parent.find('#unselectMultiItems').show();
} else {
MS.table.$parent.find('#selectMultiItems').show();
MS.table.$parent.find('#unselectMultiItems').hide();
}
});
}
/**
* The method is updating the counter in the delete button.
*/
MS.updateCounter = function() {
var activeLen = MS.table.$tbodyTr.filter('.active').length;
MS.table.$parent.find('#moduleItemsMultiSelectButtons .count').html('('+activeLen+')');
};
/**
* The method is responsible for showing or hiding manage buttons.
*/
MS.hideShowButtons = function() {
var $moduleItemsMultiSelectButtons = MS.table.$parent.find('#moduleItemsMultiSelectButtons');
var activeLen = MS.table.$tbodyTr.filter('.active').length;
if ( activeLen == 0 ) {
$moduleItemsMultiSelectButtons.slideUp(600, function() {
MS.$table.css({ marginBottom: 0 });
});
} else {
MS.$table.css({ marginBottom: $moduleItemsMultiSelectButtons.outerHeight() });
$moduleItemsMultiSelectButtons.slideDown(600);
}
};
/**
* The method is generating the check box HTML
*/
MS.generateCheckBoxHTML = function() {
var html = '';
html += '<div class="checkBoxInput pull-left" style="padding:3px 10px;">';
html += '<label>';
html += '<input type="checkbox" class="ace input-lg checkboxInput" data-item-id="5138487">';
html += '<span class="lbl fullColor bigger-120"></span>';
html += '</label>';
html += '</div>';
return html;
}
/**
* The method is generating the manage buttons
*/
MS.generateManageButtonsHTML = function() {
var html = '';
html += '<div id="moduleItemsMultiSelectButtons">';
html += '<div>';
html += '<button id="deleteSeletectItems" class="btn btn-danger"><i class="ace-icon fa fa-trash-o"></i> <span>' + translations.deleteSelectedItems + '</span> <span class="count"></span></button>';
html += '&nbsp;&nbsp;&nbsp;';
html += '<button id="selectMultiItems" class="btn btn-primary"><i class="ace-icon fa fa-hand-paper-o"></i> <span>' + translations.selectAllItems + '</span></button>';
html += '<button id="unselectMultiItems" class="btn btn-primary" style="display:none;"><i class="ace-icon fa fa-hand-paper-o"></i> <span>' + translations.unselectAllItems + '</span></button>';
html += '</div>';
html += '</div>';
return html;
};
/**
* The function refresh the object. There are some actions that
* changed the DOM, in those cases we need to refresh the object
* the new DOM elements.
*/
MS.refresh = function() {
MS.table.$theadTr = $(MS.settings.table.selector + ' thead tr');
MS.table.$tbodyTr = $(MS.settings.table.selector + ' tbody tr');
MS.updateCounter();
MS.hideShowButtons();
};
return MS;
}();/**
* The function handle the modules activities items.
*/
function ModulesActivitiesItemsHandler( settings ) {
var maih = this;
this.websiteID = settings.websiteID;
this.moduleID = settings.moduleID;
this.moduleTypeNUM = settings.moduleTypeNUM;
this.itemSelector = settings.itemSelector;
this.noItemsMessage = settings.noItemsSelector ? $(settings.noItemsSelector) : '';
this.$sortable = settings.sortable ? $(settings.sortable.selector) : '';
this.buttons = settings.buttons;
/**
* No items handler - when the page is loading and there is no items
* the `itemSelector.length` will be 0
*/
if ( this.noItemsMessage.length > 0 ) {
if ( $(this.itemSelector).length == 0 ) {
this.noItemsMessage.show();
$(this.itemSelector).closest('table').hide();
}
}
if ( this.$sortable.length > 0 ) {
this.$sortable.sortable({
opacity: 0.8,
revert: true,
delay: 100,
forceHelperSize: true,
placeholder: 'draggable-placeholder',
forcePlaceholderSize: true,
tolerance: 'pointer',
handle: '.mis-btn-drag',
cancel: '',
helper: function( event, item ) {
return '<div style="display:none;">&nbsp;</div>';
},
update: function( event, ui ) {
var request = $.post( '/versions/' + versionNUM + '/wizard/modules/updatePlace.php', {
w : maih.websiteID,
moduleID : maih.moduleID,
moduleTypeNUM: maih.moduleTypeNUM,
id: ui.item.data('id'),
prevId: ui.item.prev().data('id')
});
}
});
}
if ( !this.buttons ) return;
if ( this.buttons.delete ) {
$(this.buttons.delete.selector).confirmation({
placement: intrface_align,
title: translations.areYouSure,
btnOkLabel: '<i class="icon-ok-sign icon-white"></i> '+translations.yes,
btnCancelLabel: '<i class="icon-remove-sign"></i> '+translations.no,
popout: true,
singleton: true,
container: 'body',
btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
onConfirm: function() {
var $btn = $(this);
var $item = $btn.closest(maih.itemSelector);
if ( !$item || $.isNumeric($item.data('id')) === 0 ) return false;
var deleteURL = $item.data('custom-delete-url') ? $item.data('custom-delete-url') : '/versions/2/wizard/modules/delete.php';
$.post(deleteURL, {
w : maih.websiteID,
id: $item.data('id'),
moduleID : maih.moduleID,
moduleTypeNUM: maih.moduleTypeNUM,
ajax: 'true'
}).done(function( data ) {
if ( data !== 'success' ) return;
/**
* No items handler - when removing item the `itemSelector.length` will be 2
* and because of <tr> that is the titles of the table
* so we need to hide the table it self
*/
if ( $(maih.itemSelector).length == 2 && maih.noItemsMessage.length > 0 ) {
$(maih.itemSelector).closest('table').fadeOut(0,function() {
$item.remove();
maih.noItemsMessage.fadeIn(250);
});
} else {
$item.fadeOut(250, function() {
$item.remove();
ModulesItemsMultiSelect.refresh();
});
}
});
}
});
}
if ( this.buttons.moreOptions ) {
var $itemMoreOpitonBtn = $(this.buttons.moreOptions.selector);
var $dropDownMenu = $itemMoreOpitonBtn.closest('.btn-group').find('ul');
$dropDownMenu.addClass('dropdown-menu-'+intrface_align_reverse);
if ( this.buttons.moreOptions.buttons.duplicate ) {
$(this.buttons.moreOptions.buttons.duplicate.selector).on('click', function() {
var item = {
websiteID : maih.websiteID,
uniqueID : $(this).data('unique-id'),
moduleID : maih.moduleID
}
DuplicateModuleItem(item);
});
}
if ( this.buttons.moreOptions.buttons.visible ) {
var buttonSelector = this.buttons.moreOptions.buttons.visible.selector;
$.each($(this.itemSelector), function( index, item ) {
var $item = $(this);
if ( $item.data('hidden') == 1 ) {
$item.find('td.edit-item-btn').append('<span class="visibility-text label label-warning message-status">' + translations.invisible + '</span>');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.visible);
} else {
$item.find('td.edit-item-btn').append('<span class="visibility-text label label-warning message-status"></span>');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.invisible);
}
});
$(this.buttons.moreOptions.buttons.visible.selector).on('click', function( event ) {
var $this = $(this);
var $item = $this.closest('tr');
var hidden = $item.data('hidden') == 1 ? 0 : 1;
$.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/modules/itemsVisibilityAjax.php",
data: {
w: maih.websiteID,
id: $item.data('id'),
moduleID : maih.moduleID,
moduleTypeNUM : maih.moduleTypeNUM,
hidden : hidden
},
success: function( data ) {
data = tryParseJSON(data);
if ( data.success ) {
$item.data('hidden',hidden);
if ( hidden == 0 ) {
$item.find('.visibility-text').html('');
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye-slash" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.invisible);
} else {
$item.find('.visibility-text').html(translations.invisible);
$item.find(buttonSelector).empty();
$item.find(buttonSelector).append('<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;');
$item.find(buttonSelector).append(translations.visible);
}
}
}
});
});
}
}
/**
* Module items multi select initialize
*/
ModulesActivitiesItemsMultiSelect.init({
websiteID : maih.websiteID,
moduleID : maih.moduleID,
moduleTypeNUM : maih.moduleTypeNUM,
versionNUM : '2',
table : {
selector : '.modules-items-table'
},
noItemsMessage : maih.noItemsMessage,
buttons : maih.buttons
});
}
/**
* Module items multi select for activities class - This class is adding
* the items table ability to select multiple items and delete them.
*/
var ModulesActivitiesItemsMultiSelect = function() {
var MS = {};
/**
* Initialize - The method is initialing the class.
* @param {object} settings - JSON that contains the variables.
*/
MS.init = function( settings ) {
if ( !settings.table || !settings.websiteID || !settings.moduleID || !settings.moduleTypeNUM ) return;
MS.settings = settings;
MS.websiteID = settings.websiteID;
MS.moduleID = settings.moduleID;
MS.moduleTypeNUM = settings.moduleTypeNUM;
MS.versionNUM = settings.versionNUM;
MS.noItemsMessage = settings.noItemsMessage;
MS.table = {};
MS.$table = $(settings.table.selector);
MS.table.$parent = $(settings.table.selector).parent();
MS.table.$theadTr = $(settings.table.selector + ' thead tr');
MS.table.$tbodyTr = $(settings.table.selector + ' tbody tr');
var checkBoxHTML = MS.generateCheckBoxHTML();
MS.table.$theadTr.prepend('<th class="module-items-check-box">'+checkBoxHTML+'</th>');
MS.table.$tbodyTr.each(function( index, tr ) {
$(tr).prepend('<td class="module-items-check-box">'+checkBoxHTML+'</td>');
});
MS.addManageButtons();
MS.checkBoxesOnChange();
};
/**
* Manage buttons - The method is responsible for adding the
* manage buttons.
*/
MS.addManageButtons = function() {
MS.table.$parent.append(MS.generateManageButtonsHTML());
MS.selectMultiItemsClick();
MS.unselectSelectMultiItemsClick();
if(MS.settings.buttons.delete) MS.deleteSelectedItem();
if (MS.moduleTypeNUM == 37 || MS.moduleTypeNUM == 2 || MS.moduleTypeNUM == 96 || MS.moduleTypeNUM == 15 || MS.moduleTypeNUM == 10 || MS.moduleTypeNUM == 17 || MS.moduleTypeNUM == 52 || MS.moduleTypeNUM == 112 || MS.moduleTypeNUM == 7 || MS.moduleTypeNUM == 40 || MS.moduleTypeNUM == 94) {
MS.statusMultiChange();
MS.statusChangeAjax();
}
MS.approveSelectedItems();
MS.rejectSelectedItems();
}
MS.statusMultiChange = function() {
$('#statusMultichange').change(function() {
var status = $(this).val();
var type = $(this).data('type');
var keyValue = {
comments: 'id',
messages: 'id'
};
var key = keyValue[type] || 'orderid';
$('#preloader').show(400, function () {
var $tr = MS.table.$tbodyTr.filter('.active');
var items = Array();
$tr.each(function( index , tr ) {
var $this = $(tr);
items.push($this.data(key));
});
/**
* Gets the url based on the type
* Sets the default url value to reference 'orders'
* @param  {string} type - module type
* @param  {string} id - item id
* @param  {string} status - selected status
* @return {string} url - url that changes the status
*/
function getUrl(type, id, status) {
var url = '';
switch (type) {
case 'messages':
url = '/versions/' + MS.versionNUM + '/wizard/messages/changeStatus.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&status=' + status + '&m=' + id + '&w=' + MS.websiteID
break;
case 'comments':
url = '/versions/' + MS.versionNUM + '/wizard/comments/confirm.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&blockBOO=' + status + '&m=' + id + '&w=' + MS.websiteID + '&p=' + $('tr[data-'+key+'=' + id + ']').data('page-url') + '&moduleID=' + $('tr[data-'+key+'=' + id + ']').closest('tr').data('module-id');
break;
default:
url = '/versions/' + MS.versionNUM + '/wizard/orders/manage/changeStatus.php?moduleTypeNUM=' + MS.moduleTypeNUM + '&status=' + status + '&orderID=' + id + '&w=' + MS.websiteID
break;
}
return url;
};
if ( items.length > 0 ) {
$.each(items, function( i, id ) {
$.ajax({
type: 'GET',
url: getUrl(type, id, status),
cache: false,
async: false,
success: function () {
$("tr[data-"+key+"=" + id + "] .statuses").load(window.location + " tr[data-"+key+"=" + id + "] .statuses .btn-group", function () {
$('#preloader').hide();
$('tr[data-'+key+'=' + id + '] .statuses ul li a').click(function (e) {
var id = $(this).parents('.trline').data(key);
var status = $(this).data('status');
MS.voidStatusChange(id, status, type, $(this));
e.preventDefault();
});
});
}
});
});
$('#preloader').hide();
}
});
});
};
/**
* The method is responsible for deleting all the selected items.
*/
MS.deleteSelectedItem = function() {
var restore = this.settings.buttons.delete.restore;
var type = this.settings.buttons.delete.type;
/**
* Restore handler - Here the delete button will act as a restore button on the
* deleted items page.
*/
if ( restore ) {
MS.table.$parent.find('#deleteSeletectItems').off('confirmation').click(function() {
var $tr = MS.table.$tbodyTr.filter('.active');
var items = Array();
$tr.each(function( index , tr ) {
var $this = $(tr);
items.push({
id: $this.data('id'),
moduleID: $this.data('module-id'),
uniquePageID: $this.data('unique-page-id')
});
});
if ( items.length > 0 ) {
MS.deleteItems(items,restore,type);
}
});
}
/**
* Delete handler - Show question to the user when he is trying top delete the items
* and after the confirmation delete them.
*/
if ( !restore ) {
MS.table.$parent.find('#deleteSeletectItems').confirmation({
placement: 'auto',
title: translations.areYouSure,
btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
popout: true,
singleton: true,
container: 'body',
btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
onConfirm: function () {
var $tr = MS.table.$tbodyTr.filter('.active');
var items = Array();
$tr.each(function( index , tr ) {
var $this = $(tr);
items.push({
id: $this.data('id'),
moduleID: $this.data('module-id'),
uniquePageID: $this.data('unique-page-id')
});
});
if ( items.length > 0 ) {
MS.deleteItems(items,restore,type);
}
}
});
}
};
/**
* The method is responsible for selecting the items that is not
* selected.
*/
MS.selectMultiItemsClick = function() {
MS.table.$parent.find('#selectMultiItems').click(function() {
MS.table.$tbodyTr.filter(':not(.active):visible').find('.checkboxInput').each(function() {
var $this = $(this);
$this.prop('checked', true);
$this.closest('tr').addClass('active');
});
MS.table.$parent.find('#selectMultiItems').hide();
MS.table.$parent.find('#unselectMultiItems').show();
MS.updateCounter();
});
};
/**
* Delete Items callback
*/
MS.deleteItemsCallback = function(items) {
if (items) {
$.each(items.split(','), function(key, val){
var $item = $("tr[data-id=" + val + "]");
$item.fadeOut(250,function() {
$item.remove();
MS.refresh();
});
});
}
$('#preloader').hide();
};
/**
* The method is responsible for deleting the items.
*
* @param {string}  items - The items we need to delete.
* @param {boolean} restore - A flag that will determinate if the user is restoring the deleted items
* or deleting the active items.
* @param {string}  type - Items type comments or orders.
*/
MS.deleteItems = function( items, restore, type ) {
if ( !restore ) restore = false;
if ( !type ) type = false;
var ids = Array();
$.each(items, function( index, item ) {
ids.push(item.id);
});
ids = ids.join(',');
/**
* Delete comments - Delete multiple comments that the user has selected.
*/
if ( type == 'comments' && (MS.moduleTypeNUM == 17 || MS.moduleTypeNUM == 52 || MS.moduleTypeNUM == 112) ) {
$('#preloader').show(400, function () {
$.ajax({
type: 'GET',
url: '/versions/' + MS.versionNUM + '/wizard/comments/delete.php',
data: {
m: JSON.stringify(items),
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM
},
cache: false,
async: false
});
MS.deleteItemsCallback(ids);
});
return;
}
/**
* Delete / restore orders - Delete multiple orders that the user has selected.
*/
if ( MS.moduleTypeNUM == 37 || MS.moduleTypeNUM == 2 || MS.moduleTypeNUM == 96 || MS.moduleTypeNUM == 15 || MS.moduleTypeNUM == 10 || MS.moduleTypeNUM == 112 ) {
$('#preloader').show(400, function () {
$.ajax({
type: 'GET',
url: '/versions/' + MS.versionNUM + '/wizard/orders/manage/delete.php',
data: {
m: ids,
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM,
restore: restore
},
cache: false,
async: false
});
MS.deleteItemsCallback(ids);
});
return;
}
/**
* Delete comments - Delete multiple comments that the user has selected.
*/
if ( type == 'messages' && (MS.moduleTypeNUM == 7 || MS.moduleTypeNUM == 40 || MS.moduleTypeNUM == 94) ) {
$('#preloader').show(400, function () {
$.ajax({
type: 'GET',
url: '/versions/' + MS.versionNUM + '/wizard/messages/delete.php',
data: {
m: ids,
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM
},
cache: false,
async: false
});
MS.deleteItemsCallback(ids);
});
return;
}
var request = $.post('/versions/' + MS.versionNUM + '/wizard/modules/delete.php', {
w : MS.websiteID ,
ids: items,
moduleID : MS.moduleID,
moduleTypeNUM: MS.moduleTypeNUM ,
ajax: 'true'
}).done(function( data ) {
if ( data !== 'success' ) return;
items = items.split(',');
$(items).each(function( index, itemID ) {
var $item = MS.table.$tbodyTr.filter('[data-id='+itemID+']');
$item.fadeOut(250,function() {
$item.remove();
if ( index === ($(items).length - 1) ) {
MS.showOrHideNoItemsMessage();
}
});
});
});
}
/**
* The method is showing the no items message
* if the items table is empty.
*/
MS.showOrHideNoItemsMessage = function() {
MS.table.$tbodyTr = MS.$table.find('tbody tr');
MS.table.$parent.find('#moduleItemsMultiSelectButtons').slideUp(600);
if ( MS.table.$tbodyTr.length == 0 && MS.noItemsMessage.length > 0 ) {
MS.$table.fadeOut(0,function() {
MS.noItemsMessage.fadeIn(250);
});
}
};
/**
* The method is responsible for unselecting the selected items.
*/
MS.unselectSelectMultiItemsClick = function() {
MS.table.$parent.find('#unselectMultiItems').click(function() {
MS.table.$tbodyTr.filter('.active:visible').find('.checkboxInput').each(function() {
var $this = $(this);
$this.prop('checked', false);
$this.closest('tr').removeClass('active');
});
MS.table.$theadTr.find('.checkboxInput').prop('checked', false);
MS.table.$parent.find('#unselectMultiItems').hide();
MS.table.$parent.find('#selectMultiItems').show();
MS.hideShowButtons();
MS.updateCounter();
});
};
/**
* The method is responsible for changing the record status by sending ajax.
*
* @param {integer} id - Record id.
* @param {integer} status - New record status.
* @param {string} type - Record type (comment or order).
* @param {jq object} $button - The button that the user is clicking on to fire the event.
*/
MS.voidStatusChange = function(id, status, type, $button) {
var key = (type === 'comments' || type === 'messages' ? 'id' : 'orderid');
switch (type) {
case 'messages':
var params = {
type: 'GET',
url: '/versions/2/wizard/messages/changeStatus.php',
data: {
m: id,
status: status,
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM
},
cache: false,
async: false
};
break;
case 'comments':
var params = {
type: 'GET',
url: '/versions/2/wizard/comments/confirm.php',
data: {
m: id,
blockBOO: status,
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM,
moduleID: $button.closest('tr').data('module-id'),
p: $button.closest('tr').data('page-url')
},
cache: false,
async: false
};
break;
default:
var params = {
type: 'GET',
url: '/versions/2/wizard/orders/manage/changeStatus.php',
data: {
orderID: id,
status: status,
w: MS.websiteID,
moduleTypeNUM: MS.moduleTypeNUM
},
cache: false,
async: false
};
break;
}
var $order_row = $("tr[data-"+key+"=" + id + "]");
if ( $order_row.data('status') == status ) return;
$order_row.data('status',status);
$('#preloader').show(400, function () {
$.ajax(params).done(function () {
$order_row.find('.statuses').load(window.location + " tr[data-"+key+"=" + id + "] .statuses .btn-group", function () {
$('#preloader').hide();
$order_row.find('.statuses ul li a').click(function ( event ) {
var id = $(this).parents('.trline').data(key);
var status = $(this).data('status');
event.preventDefault();
if ( $(this).data('confirmation') ) {
var labelOk = $(this).data('ok');
var labelCancel = $(this).data('cancel');
var labelMessage = $(this).data('message');
bootbox.confirm({
message: labelMessage,
buttons: {
confirm: {
label: labelOk,
className: 'btn-primary btn-sm'
},
cancel: {
label: labelCancel,
className: 'btn-sm'
}
},
callback: function(result) {
if(result) {
MS.voidStatusChange(id, status, type, $(this));
}
}
});
return;
}
MS.voidStatusChange(id, status, type, $(this));
});
});
});
});
}
MS.statusChangeAjax = function() {
$('.statuses ul li a').click(function(e){
var type = $(this).parents('tbody').data('type') || 'orders';
var key = (type === 'comments' || type === 'messages' ? 'id' : 'orderid');
var id = $(this).parents('.trline').data(key);
var status = $(this).data('status');
if ($(this).data('confirmation')) {
var labelOk = $(this).data('ok');
var labelCancel = $(this).data('cancel');
var labelMessage = $(this).data('message');
bootbox.confirm({
message: labelMessage,
buttons: {
confirm: {
label: labelOk,
className: 'btn-primary btn-sm'
},
cancel: {
label: labelCancel,
className: 'btn-sm'
}
},
callback: function(result) {
if(result) {
MS.voidStatusChange(id, status, type, $(this));
}
}
});
return;
}
MS.voidStatusChange(id, status, type, $(this));
e.preventDefault();
});
};
/**
* The method is responsible for the check boxes on change event.
*/
MS.checkBoxesOnChange = function() {
var $checkBoxInput =  MS.table.$tbodyTr.find('.checkBoxInput');
var $selectAllcheckBoxInput = MS.table.$theadTr.find('.checkboxInput');
$selectAllcheckBoxInput.on('change',function() {
if ( $(this).is(':checked') ) {
MS.table.$parent.find('#selectMultiItems').trigger('click');
MS.hideShowButtons();
} else {
MS.table.$parent.find('#unselectMultiItems').trigger('click');
}
});
$checkBoxInput.on('change',function() {
var $tr = $(this).closest('tr');
if ( $tr.hasClass('active') ) {
$tr.removeClass('active');
} else {
$tr.addClass('active');
}
if ( MS.table.$tbodyTr.filter('.active').length == 0 ) {
$selectAllcheckBoxInput.prop('checked', false);
}
MS.hideShowButtons();
MS.updateCounter();
if ( MS.table.$tbodyTr.find('.checkboxInput:visible:not(:checked)').length === 0 ) {
MS.table.$parent.find('#selectMultiItems').hide();
MS.table.$parent.find('#unselectMultiItems').show();
} else {
MS.table.$parent.find('#selectMultiItems').show();
MS.table.$parent.find('#unselectMultiItems').hide();
}
});
}
/**
* The method is updating the counter in the delete button.
*/
MS.updateCounter = function() {
var activeLen = MS.table.$tbodyTr.filter('.active').length;
MS.table.$parent.find('#moduleItemsMultiSelectButtons .count').html('('+activeLen+')');
};
/**
* The method is responsible for showing or hiding manage buttons.
*/
MS.hideShowButtons = function() {
var $moduleItemsMultiSelectButtons = MS.table.$parent.find('#moduleItemsMultiSelectButtons');
var activeLen = MS.table.$tbodyTr.filter('.active').length;
if ( activeLen == 0 ) {
$moduleItemsMultiSelectButtons.slideUp(600);
} else {
$moduleItemsMultiSelectButtons.slideDown(600);
}
};
/**
* The method is responsible for approve all the selected items.
*/
MS.approveSelectedItems = function() {
MS.table.$parent.find('#approveSelectedItems').click(function(){
MS.table.$parent.find('#statusMultichange').val(0).change();
});
};
/**
* The method is responsible for reject all the selected items.
*/
MS.rejectSelectedItems = function() {
MS.table.$parent.find('#rejectSelectedItems').click(function(){
MS.table.$parent.find('#statusMultichange').val(1).change();
});
};
/**
* The method is generating the check box HTML
*/
MS.generateCheckBoxHTML = function() {
var html = '';
html += '<div class="checkBoxInput pull-left" style="padding:3px 10px;">';
html += '<label>';
html += '<input type="checkbox" class="ace input-lg checkboxInput" data-item-id="5138487">';
html += '<span class="lbl fullColor bigger-120"></span>';
html += '</label>';
html += '</div>';
return html;
}
/**
* The method is generating the manage buttons
*/
MS.generateManageButtonsHTML = function() {
var html = '';
html += '<div id="moduleItemsMultiSelectButtons">';
html += '<div>';
if ( this.settings.buttons.statusSelector ) {
var type = this.settings.buttons.statusSelector.type || 'orders';
var hidden = this.settings.buttons.statusSelector.hidden || false;
html += '<select data-type="'+type+'" id="statusMultichange" class="status-multichange'+(hidden ? ' hidden' : '')+'">';
html += '<option selected disabled>Set Status For Selected</option>';
if (this.settings.buttons.statusSelector.statuses) {
$.each( this.settings.buttons.statusSelector.statuses, function( key, value ) {
html += '<option value="'+key+'">'+value+'</option>';
});
} else {
html += '<option value="1">New</option>'+
'<option value="2">Paid</option>' +
'<option value="3">In Progress</option>' +
'<option value="4">Cancelled</option>' +
'<option value="5">Completed</option>' +
'<option value="6">Shipped</option>';
}
html += '</select>&nbsp;&nbsp;&nbsp;';
}
if ( this.settings.buttons.approveSelected ) {
html += '<button id="approveSelectedItems" class="btn btn-success"><i class="ace-icon glyphicon glyphicon-ok"></i> <span>Approve Selected</span> <span class="count"></span></button>';
html += '&nbsp;&nbsp;&nbsp;';
}
if ( this.settings.buttons.rejectSelected ) {
html += '<button id="rejectSelectedItems" class="btn btn-primary"><i class="ace-icon glyphicon glyphicon-remove"></i> <span>Reject Selected</span> <span class="count"></span></button>';
html += '&nbsp;&nbsp;&nbsp;';
}
if(this.settings.buttons.delete) {
html += '<button id="deleteSeletectItems" class="btn btn-danger"><i class="ace-icon fa fa-trash-o"></i> <span>' + (this.settings.buttons.delete.restore ? 'Restore Selected Items' : translations.deleteSelectedItems) + '</span> <span class="count"></span></button>';
html += '&nbsp;&nbsp;&nbsp;';
}
html += '<button id="selectMultiItems" class="btn btn-primary"><i class="ace-icon fa fa-hand-paper-o"></i> <span>' + translations.selectAllItems + '</span></button>';
html += '<button id="unselectMultiItems" class="btn btn-primary" style="display:none;"><i class="ace-icon fa fa-hand-paper-o"></i> <span>' + translations.unselectAllItems + '</span></button>';
html += '</div>';
html += '</div>';
return html;
};
/**
* The function refresh the object. There are some actions that
* changed the DOM, in those cases we need to refresh the object
* the new DOM elements.
*/
MS.refresh = function() {
MS.table.$theadTr = $(MS.settings.table.selector + ' thead tr');
MS.table.$tbodyTr = $(MS.settings.table.selector + ' tbody tr');
MS.updateCounter();
MS.hideShowButtons();
};
return MS;
}();/**
* Edit Items Toolbar Object.
*/
var EditItemsToolbar = function() {
var event_namespace = 'eit_form_saved';
var T = {
manual_validation_error: false,
html: '<div class="SubmitButtonsArea form-actions">'
+ '<div class="eit-buttons-box">'
+ '<button type="button" class="btn btn-success eit-btn eit-save-btn">'+translations.eit_Save+'</button>'
+ '<button type="button" class="btn btn-success eit-btn eit-save-close-btn">'+translations.eit_SaveClose+'</button>'
+ '<a class="eit-btn eit-cancel-btn" href="#">'+translations.eit_Cancel+'</a>'
+ '<span class="eit-separator">|</span>'
+ '<a class="btn btn-default btn-mini eit-btn eit-view-btn" href="#" target="_blank">'+translations.eit_View+'</a>'
+ '</div>'
+ '<div class="eit-loading">'
+ '<i class="ace-icon fa fa-spinner fa-spin blue fa-3x"></i>'
+ '</div>'
+ '</div>'
};
/**
* Initialize
*/
T.init = function( settings ) {
T.$html = $(T.html);
T.$form = $('form').length === 1 ? $('form') : $(settings.form);
T.btns = {
$save: T.$html.find('.eit-save-btn'),
$save_close: T.$html.find('.eit-save-close-btn'),
$cancel: T.$html.find('.eit-cancel-btn'),
$view: T.$html.find('.eit-view-btn'),
$separator: T.$html.find('.eit-separator')
}
T.$buttons_box = T.$html.find('.eit-buttons-box');
T.$loading = T.$html.find('.eit-loading');
T.form_submit_handler();
T.btns.$save.click(function() {
T.$form.data('save-type','save');
T.$form.submit();
});
T.btns.$save_close.click(function() {
T.$form.data('save-type','save_close');
T.$form.submit();
});
if ( T.$form.data('cancel-url') ) {
T.btns.$cancel.attr('href',T.$form.data('cancel-url'));
} else {
T.btns.$cancel.hide();
}
T.view_button_init();
T.$form.append(T.$html);
};
/**
* The function initialize the view button.
*/
T.view_button_init = function() {
if ( T.$form.data('view-url') ) {
T.btns.$view.attr('href',T.$form.data('view-url'));
T.btns.$view.show();
T.btns.$separator.show();
} else {
T.btns.$view.hide();
T.btns.$separator.hide();
}
};
/**
* The function handle the form submit.
*/
T.form_submit_handler = function() {
T.$form.submit(function( event ) {
event.preventDefault();
if ( !T.$form.valid() ) return;
/**
* by default  we use `T.$form.valid()` using jQuery Validator to validate the
* form because most of the system is using it, but sometimes we have manually
* validations scripts that prevent form submit, those scripts can use that
* boolean to prevent the tool-bar from submitting the form.
*/
if ( T.manual_validation_error ) return;
T.$buttons_box.addClass('saving-loading');
T.$loading.find('i').css({
left: (T.btns.$save.position().left + (T.btns.$save.outerWidth() / 2) - 21)
});
T.$loading.show();
var request = $.post(
T.$form.attr('action'),
T.$form.serialize() + '&json=1'
).done(function( response ) {
response = tryParseJSON(response);
T.$buttons_box.removeClass('saving-loading');
T.$loading.hide();
if ( response.status === 'success' ) {
gritter_update();
if ( T.$form.data('save-type') === 'save_close' ) {
window.location.href = T.$form.data('cancel-url');
return;
}
T.$form.find('input[name="id"]').val(response.id);
T.$form.data('view-url',response.url);
/**
* Trigger callback event when the save is successfully returned.
*
* Note: At the moment only the advanced SEO toll is using that but in the
* future we can use this ability.
*/
T.$form.trigger(event_namespace,response);
T.view_button_init();
}
});
});
};
return T;
}();/**
* Unsaved Changes Detector - The object observe a container inputs and check
* if the user edit one of them in any way, if so it will add a data attribute
* to the container for alerting about unsaved changes.
*/
var UnsavedChangesDetector = new function () {
var UCD = this;
var event_namespace = 'unsaved_changes_detector';
var $container;
var $form;
var $inputs;
var ready;
/**
* Initialize
*/
UCD.init = function( settings ) {
if ( !settings ) settings = {};
$container = settings.container ? $(settings.container) : $('html');
$form = settings.form ? $(settings.form) : $('form').first();
if ( $container.length === 0 ) throw 'Missing Settings - `container` not found!';
if ( $form.length === 0 ) throw 'Missing Settings - `form` not found!';
$inputs = $container.find(":input");
$form.submit(function( event ) { UCD.refresh(); });
UCD.start();
ready = true;
};
/**
* The function start observe.
*/
UCD.start = function() {
UCD.stop();
$inputs.on('input.'+event_namespace,function( event ) {
UCD.unsaved_changes(true).stop();
});
$inputs.on('change.'+event_namespace,function( event ) {
UCD.unsaved_changes(true).stop();
});
$(document).on('change.'+event_namespace+'', ':input', function( event ){
UCD.unsaved_changes(true).stop();
});
};
/**
* The function stop observe.
*/
UCD.stop = function() {
$inputs.off('.'+event_namespace);
$(document).off('.'+event_namespace);
};
/**
* The function update the unsaved changes status at the container object.
*/
UCD.unsaved_changes = function( status ) {
if ( !ready ) return;
$container.attr('data-unsaved-changes',status);
return UCD;
};
/**
* The function refresh the container observe.
*/
UCD.refresh = function() {
UCD.unsaved_changes(false);
UCD.start();
return UCD;
};
};/**
* Advanced SEO Plugin.
*/
var S123AdvancedSEO = function() {
var that = {};
/**
*  Initialize SEO Plugin.
*/
that.init = function( settings ) {
if ( !settings.type || (settings.type != 'module' && settings.type != 'item') ) return;
that.websiteID = settings.websiteID;
that.$container = settings.$container;
that.$form = settings.$form;
that.json = settings.json;
that.page = settings.page;
that.type = settings.type;
that.isDescriptionCharLimit = true;
that.urlPlaceholder = translations.advancedSEO.url.placeholder;
that.isUsingCustomURL = settings.isUsingCustomURL ? settings.isUsingCustomURL : false;
that.pageUrlExample = 'page-url-example'
that.seo = {
title: '',
description: '',
url: '',
keywords: '',
image: '',
isActive: false
}
that.json = tryParseJSON(that.json);
if ( typeof that.json === 'object' ) {
$.each(that.seo, function( input ){
if ( input == 'url' || !that.json[input] ) return true;
that.seo[input] = that.json[input];
});
}
if ( that.page.url.length > 0 ) {
that.urlPlaceholder = that.page.url;
that.pageUrlExample = that.page.url;
if ( that.isUsingCustomURL ) {
that.seo.url = that.page.url;
}
}
if ( !that.seo.isActive && settings.type == 'module' && that.page.meta_des ) {
that.seo.description = that.page.meta_des;
}
/**
* old users that already have description bigger then 320 chars will be
* able to continue edit their description with more then 320 chars but
* the all others users will have limitation of 320 chars
*/
if ( that.type == 'module' && that.seo.description.length > 320 ) {
that.isDescriptionCharLimit = false;
}
that.$html = that.generateHTML();
that.$title = that.$html.find('input[data-name="seoTitle"]');
that.$description = that.$html.find('textarea[data-name="seoDescription"]');
that.$url = that.$html.find('input[data-name="seoURL"]');
that.$keywords = that.$html.find('input[data-name="seoKeywords"]');
that.$image = that.$html.find('#seoImage');
that.$titleCharLimit = that.$html.find('#seoTitleCharLimit');
that.$descriptionCharLimit = that.$html.find('#seoDescriptionCharLimit');
that.$facebookBtn = that.$html.find('.seo-f-btn');
that.$googleBtn = that.$html.find('.seo-g-btn');
that.$facebookPreview = that.$html.find('.seo-f-preview');
that.$googlePreview = that.$html.find('.seo-g-preview');
that.$seoDomain = that.$html.find('.seo-domain');
that.$facebookPreviewDomain = that.$html.find('.seo-f-url.advanced-seo-domain');
that.$customURL = that.$html.find('input[data-name="seoCustomURL"]');
that.eventsHandler();
that.$container.append(that.$html);
UploadSingleFilesInitialize();
ColorboxInitial('.fileUploadBox [data-rel="colorbox"]');
BuildInterfaceAccorion();
that.$html.find('[data-rel=tooltip]').tooltip({
container: 'body',
placement: 'auto'
});
that.$html.find('input:not([data-name="seoCustomURL"]), textarea').on('input.s123_advanced_seo change.s123_advanced_seo',function() {
that.$image = that.$html.find('#seoImage');
that.update(false);
});
that.$form.on('eit_form_saved', function( event, response ) {
that.$customURL.val(decodeURIComponent(response.pageURL));
if ( that.$customURL.val().length > 0 && that.$url.val().length > 0 ) {
that.$url.val(that.$customURL.val()).trigger('change.s123_advanced_seo');
}
});
that.pageTitleHandler();
that.$container.removeClass('hidden');
};
/**
*  Generate SEO Inputs.
*/
that.eventsHandler = function() {
that.update(true);
that.$form.submit(function() {
that.$html.find('#advancedSEOurl').val(that.seo.url);
if ( !that.seo.isActive ) {
that.seo.isActive = that.type == 'module' ? true : that.isActive();
}
delete that.seo.url;
that.$html.find('#advancedSEO').html(JSON.stringify(that.seo));
});
that.$facebookBtn.click(function() {
that.$googlePreview.fadeOut(240, function() {
that.$facebookPreview.fadeIn(240);
that.$facebookBtn.addClass('active');
that.$googleBtn.removeClass('active');
});
});
that.$googleBtn.click(function() {
that.$facebookPreview.fadeOut(240, function() {
that.$googlePreview.fadeIn(240);
that.$googleBtn.addClass('active');
that.$facebookBtn.removeClass('active');
});
});
};
/**
*  Update SEO object
*/
that.update = function( isUpdateInputs ) {
if ( isUpdateInputs ) {
that.$title.val(that.seo.title);
that.$description.html(that.seo.description);
that.$url.val(that.seo.url);
that.$url.attr('placeholder',that.urlPlaceholder);
that.$keywords.val(that.seo.keywords);
that.seo.image = that.seo.image.replace('normal_','800_');
if ( that.seo.image && that.seo.image.length > 0 ) {
that.$image.data('value',that.escapeHtml(that.seo.image));
}
that.$seoDomain.html(decodeURIComponent(that.page.domain));
if ( !that.seo.isActive || that.seo.image.length === 0 ) {
that.$html.find('.seo-f-image').css('background-image','url(' + that.page.image + ')');
} else {
that.$html.find('.seo-f-image').css('background-image','url(' + that.seo.image + ')');
}
} else {
that.seo.title = that.$title.val();
that.seo.description = that.$description.val();
that.seo.url = that.$url.val();
that.seo.keywords = that.$keywords.val();
that.seo.image = that.$image.val().replace('normal_','800_');
if ( that.seo.image.length > 0 ) {
that.$html.find('.seo-f-image').css('background-image','url(' + that.seo.image + ')');
} else {
that.$html.find('.seo-f-image').css('background-image','url(' + that.page.image + ')');
}
}
that.$titleCharLimit.html(70 - that.seo.title.length);
if ( that.isDescriptionCharLimit ) {
that.$descriptionCharLimit.html(320 - that.seo.description.length);
}
if ( isUpdateInputs && !that.seo.isActive ) {
that.$html.find('.advanced-seo-title').html(translations.advancedSEO.metaTitleTagExample);
that.$html.find('.advanced-seo-description').html(translations.advancedSEO.metaDescriptionTagExample);
that.$html.find('.advanced-seo-url').html(that.seo.url.length > 0 ? that.seo.url : that.pageUrlExample);
} else {
that.$html.find('.advanced-seo-title').html(that.seo.title);
that.$html.find('.advanced-seo-description').html(that.seo.description);
that.$html.find('.advanced-seo-url').html(that.seo.url);
}
that.$html.find('.advanced-seo-domain').html(decodeURIComponent(that.page.domain));
if ( that.$facebookPreviewDomain.text().indexOf('/') > -1 ) {
that.$facebookPreviewDomain.text(that.$facebookPreviewDomain.text().substr(0,that.$facebookPreviewDomain.text().indexOf('/')));
}
if ( that.$facebookPreviewDomain.text().substring(0,4) == 'www.' ) {
that.$facebookPreviewDomain.text(that.$facebookPreviewDomain.text().substring(4));
}
}
/**
*  Generate HTML.
*/
that.generateHTML = function() {
var html = '<div class="in-box-widget">';
html += '<div id="advancedSEOBOX" class="widget-box' + (that.type == 'module' ? " static" : "") + '">';
if ( that.type == 'item' ) {
html += '<div class="widget-header">';
html += '<h5 class="widget-title">';
html += translations.advancedSEO.customSEOTitle;
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" title="' + translations.advancedSEO.customSEOTooltip + '">';
html += '<i class="glyphicon glyphicon-question-sign"></i>';
html += '</a>';
html += '</h5>';
html += '<div class="widget-toolbar">';
html += '<a><i class="ace-icon fa fa-chevron-down"></i></a>';
html += '</div>';
html += '</div>';
}
html += '<div class="widget-body">';
html += '<div class="widget-main">';
html += '<div class="advanced-seo-container closed-to-premium">';
html += '<div class="s123-advanced-seo row">';
html += '<div class="col-xs-12">';
html += '<div class="form-group">';
html += '<label for="seoTitle">';
html += translations.advancedSEO.title.title;
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" title="' + translations.advancedSEO.title.tooltip + '">';
html += '<i class="glyphicon glyphicon-question-sign"></i>';
html += '</a>';
html += '</label>';
html += '<div class="form-group seo-title-input">';
html += '<input type="text" class="form-control" data-name="seoTitle" value="" placeholder="' + translations.advancedSEO.title.placeholder + '" maxlength="70">';
html += '<span id="seoTitleCharLimit"></span>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '<div class="col-xs-12">';
html += '<div class="form-group">';
html += '<label for="seoDescription">';
html += translations.advancedSEO.description.title;
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" title="' + translations.advancedSEO.description.tooltip + '">';
html += '<i class="glyphicon glyphicon-question-sign"></i>';
html += '</a>';
html += '</label>';
html += '<div class="form-group seo-description-input">';
html += '<textarea class="form-control" data-name="seoDescription" placeholder="' + translations.advancedSEO.description.placeholder + '"' + (that.isDescriptionCharLimit ? ' maxlength="320" ' : ' ') + 'rows="4"></textarea>';
if ( that.isDescriptionCharLimit ) {
html += '<div class="description-char-limit">'
html += '<span>' + translations.advancedSEO.remaining + '</span><span id="seoDescriptionCharLimit"></span>';
html += '</div>';
}
html += '</div>';
html += '</div>';
html += '</div>';
/* For now the user can edit URL on items only */
if ( that.type == 'item' ) {
html += '<div class="col-xs-12">';
html += '<div class="form-group">';
html += '<label for="seoURL">';
html += translations.advancedSEO.url.title;
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" title="' + translations.advancedSEO.url.tooltip + '">';
html += '<i class="glyphicon glyphicon-question-sign"></i>';
html += '</a>';
html += '</label>';
html += '<div class="input-group" style="direction: ltr;">';
html += '<span class="seo-domain input-group-addon"></span>';
html += '<input type="text" class="form-control" data-name="seoURL" value="" placeholder="' + that.urlPlaceholder + '">';
html += '</div>';
html += '</div>';
html += '</div>';
}
html += '<div class="col-xs-12">';
html += '<div class="form-group">';
html += '<label for="seoKeywords">';
html += translations.advancedSEO.keywords.title;
html += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" title="' + translations.advancedSEO.keywords.tooltip + '">';
html += '<i class="glyphicon glyphicon-question-sign"></i>';
html += '</a>';
html += '</label>';
html += '<input type="text" class="form-control" data-name="seoKeywords" value="" placeholder="' + translations.advancedSEO.keywords.placeholder + '">';
html += '</div>';
html += '</div>';
html += '<div class="col-xs-12">';
html += '<div class="input-file-upload" id="seoImage" data-website-id="' + that.websiteID + '" data-mb="30" data-file-kind="1" data-value="" data-text="' + translations.advancedSEO.image.title + '" data-library="image" data-min-height="200" data-min-width="200"></div>';
html += '</div>';
html += '<div class="seo-preview-container col-xs-12">';
html += '<div class="seo-preview-buttons">';
html += '<div class="btn-group" style="display:flex;">';
html += '<a href="#" onclick="return false;" class="seo-g-btn active"><li class="fa fa-google"></li>&nbsp;&nbsp;Google</a>';
html += '<a href="#" onclick="return false;" class="seo-f-btn"><li class="fa fa-facebook"></li>&nbsp;&nbsp;Facebook</a>';
html += '</div>';
html += '</div>';
html += '<div class="seo-preview-tabs">';
html += '<div class="seo-g-preview">';
html += '<div class="seo-g-container">';
html += '<div class="seo-g-title">';
html += '<span class="advanced-seo-title"></span>';
html += '</div>';
html += '<div class="seo-g-url">';
html += '<span>https://</span><span class="advanced-seo-domain"></span><span class="advanced-seo-url"></span>';
html += '<span class="caret"></span>';
html += '</div>';
html += '<div class="seo-g-description">';
html += '<span class="advanced-seo-description"></span>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '<div class="seo-f-preview">';
html += '<div class="seo-f-container">';
html += '<div class="seo-f-image advanced-seo-image"></div>';
html += '<div class="seo-f-content">';
html += '<span class="seo-f-url advanced-seo-domain"></span>';
html += '<div class="seo-f-text">';
html += '<div style="margin-top:5px">';
html += '<div class="seo-f-title advanced-seo-title"></div>';
html += '</div>';
html += '<span class="seo-f-description advanced-seo-description"></span>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';
html += '<textarea id="advancedSEO" name="advancedSEO" class="form-control hidden"></textarea>';
/* For now the user can edit URL on items only */
if ( that.type == 'item' ) {
html += '<input type="hidden" id="advancedSEOurl" name="advancedSEOurl" value="">';
html += '<input type="hidden" data-name="seoCustomURL" value="">';
}
html += '</div>';
html += '</div>'
html += '</div>';
html += '</div>';
html += '</div>';
html += '</div>';
return $(html);
}
/**
*  Check if the SEO tool is active by checking if the SEO object have at least one property
*	with value. We using this to let users to continue using this SEO tool even they not
* 	using paid website any more and by this the page SEO will not be destroyed.
*/
that.isActive = function() {
var isActive = false;
$.each(that.seo, function(input,value) {
if ( input == 'url' ) return true;
if ( value.length > 0 ) isActive = true;
});
return isActive;
}
/**
*  Page Title Handler
*/
that.pageTitleHandler = function() {
if ( !that.page.$title ) return;
if ( !that.seo.isActive ) return;
that.page.$title.on('change.s123_advanced_seo', function() {
bootbox.alert(translations.advancedSEO.pageTitleHandlerMsg);
});
}
/**
* The function convert special characters to HTML entities, we use it when
* we add strings into HTML attributes, it used to prevent the breaks in
* the HTML e.g. title="abc"efg".
*
* Source: http://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
*/
that.escapeHtml = function( text ) {
if ( !text ) return text;
var map = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
"'": '&#039;'
};
return text.toString().replace( /[&<>"']/g, function( m ) { return map[m]; } );
}
/**
* The function return field value from the advanced SEO object according
* to the property name if it's exist, otherwise return empty string.
*/
that.getFieldValue = function ( name ) {
if ( !that.seo[name] ) return '';
return that.seo[name];
}
return that;
}();//Run when the page load (before images and other resource)
var intrface_align;
var intrface_align_reverse;
jQuery(function($) {
if ($('html[dir=rtl]').length>0) {
intrface_align = 'right';
intrface_align_reverse = 'left';
} else {
intrface_align = 'left';
intrface_align_reverse = 'right';
}
if ( /(iPad|iPhone|iPod)/g.test(navigator.userAgent) ) {
$('html').attr('data-ios-device',/(iPad|iPhone|iPod)/g.exec(navigator.userAgent)[0]);
}
if( ace.vars['touch'] ) {
(function () {
var $moduleCategoriesListContainer = $('.module-categories-list-container');
if ( $moduleCategoriesListContainer.length === 0 ) return;
$moduleCategoriesListContainer.css({
position: 'static',
paddingBottom: '20px'
});
$moduleCategoriesListContainer.hide().removeClass('hidden-xs');
var $categoriesMenuBtn = $('<div class="col-xs-12" class="categories-menu-btn-box"><h3 class="widget-title bigger blue lighter"><i class="ace-icon fa fa-folder"></i>&nbsp;<span>'+translations.itemsCategories+'</span></h3></div>').css({
paddingBottom: '5px'
});
$categoriesMenuBtn.click(function( event ) {
var $this = $(this);
if ( $this.data('isOpen') ) {
$moduleCategoriesListContainer.slideUp(200);
$this.find('i.fa').removeClass('fa-folder-open').addClass('fa-folder');
$this.data('isOpen',false);
} else {
$moduleCategoriesListContainer.slideDown(200);
$this.find('i.fa').removeClass('fa-folder').addClass('fa-folder-open');
$this.data('isOpen',true);
}
});
if ( $moduleCategoriesListContainer.data('new-flow') ) {
$moduleCategoriesListContainer.find('#categoriesList > li').click(function() {
$moduleCategoriesListContainer.hide(500);
});
}
$moduleCategoriesListContainer.closest('.row').prepend($categoriesMenuBtn);
})();
}
CurrencySymbolToolTip();
MeasurementsUnitToolTip();
BuildInputFields();
BuildInterfaceAccorion();
jQuery.validator.addMethod('color-pattern', function(value, element) {
return this.optional(element) || /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i.test(value);
}, translations.pleaseEnterValidColor);
jQuery.validator.addMethod('phone-pattern', function(value, element) {
return this.optional(element) || /^[0-9-+*() ]+$/i.test(value);
}, translations.pleaseEnterValidPhone);
jQuery.validator.addMethod('youtube-vimeo-pattern', function(value, element) {
if ( value.slice(0,4) !== 'http' || /[<>]/.test(value) ) {
return this.optional(element) || false;
} else if ( value.indexOf('youtube') !== -1 ) {
return this.optional(element) || /[\\?\\&]v=([^\\?\\&]+)/i.test(value);
} else if ( value.indexOf('vimeo') !== -1 ) {
return this.optional(element) || /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/i.test(value);
} else {
return this.optional(element) || false;
}
}, translations.pleaseEnterValidVideoYV);
jQuery.validator.addMethod('url-abs-rel', function(value, element) {
return this.optional(element) || (value.slice(0,4) === 'http' || value.slice(0,3) === 'ftp' || value.slice(0,1) === '/');
}, translations.pleaseEnterValidUrl);
jQuery.validator.addMethod('money-pattern', function(value, element) {
return this.optional(element) || /^\d+(\.\d{1,2})?$/i.test(value);
}, translations.pleaseEnterValidMoney);
jQuery.validator.addMethod('url-https', function(value, element) {
return this.optional(element) || (value.slice(0,8) === 'https://');
}, translations.pleaseEnterValidUrlWithHttps);
jQuery.validator.addMethod('ads-by-google', function(value, element) {
return this.optional(element) || (value.toLowerCase().indexOf('.googlesyndication.com') != -1 && value.toLowerCase().indexOf('width') == -1 && value.toLowerCase().indexOf('height') == -1);
}, translations.pleaseEnterValidResponsiveAdSence);
jQuery.validator.addMethod('min-value-selector', function(value, element) {
var $compare_input = $($(element).data('min-value-selector'));
if ( $compare_input.length === 0 || !$compare_input.is(":visible") || !$.isNumeric($compare_input.val()) ) return true;
return this.optional(element) || ( parseFloat($compare_input.val()) < parseFloat(value) );
});
jQuery.validator.addMethod('min-equal-value-selector', function(value, element) {
var $compare_input = $($(element).data('min-equal-value-selector'));
if ( $compare_input.length === 0 || !$compare_input.is(":visible") || !$.isNumeric($compare_input.val()) ) return true;
return this.optional(element) || ( parseFloat($compare_input.val()) <= parseFloat(value) );
});
jQuery.validator.addMethod('equal-value-selector', function(value, element) {
var $siblings = $($(element).data('equal-value-selector')).filter(function( index, input ) {
return $(input).val().toLowerCase() == value.toLowerCase() && input.id != element.id;
});
return this.optional(element) || $siblings.length == 0;
});
/**
* jQuery Validation Plugin Initial
* Documentation : http://jqueryvalidation.org/documentation/
*/
$('#addModuleItemForm:not([data-custom-validation="true"])').validate({
errorElement: 'div',
errorClass: 'help-block',
focusInvalid: true,
ignore: ':hidden:not(.file-upload-input-field,[data-editor="froala"]),.fileUploadBox:hidden .file-upload-input-field,.form-tool-builder .form-control,.form-tool-builder input',
highlight: function (e) {
$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
},
invalidHandler: function(form, validator) {
if ( !validator.numberOfInvalids() ) return;
$('html, body').animate({
scrollTop: $(validator.errorList[0].element).offset().top
}, 500);
},
success: function (e) {
$(e).closest('.form-group').removeClass('has-error');
$(e).remove();
},
errorPlacement: function (error, element) {
if( element.is('input[type=checkbox]') || element.is('input[type=radio]') ) {
var controls = element.closest('div[class*="col-"]');
if( controls.find(':checkbox,:radio').length > 1 ) controls.append(error);
else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
}
else if( element.is('.select2') ) {
error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
}
else if( element.is('.chosen-select') ) {
error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
}
else {
error.appendTo(element.closest('.form-group'));
}
},
submitHandler: function( form ) {
$(form).find('button:submit').prop('disabled', true);
return true;
}
});
$("#addModuleItemForm [required]").closest('.form-group').find('label').after('<span style="color:red">&nbsp;*</span>');
/**
* Unsaved Changes Detector - The object observe a container inputs and check
* if the user edit one of them in any way, if so it will add a data attribute
* to the container for alerting about unsaved changes.
* Note: We add it on windows load to wait for all the JavaScript Ready event
* actions to finished, sometimes we generate new HTML using JS on page ready
* and we don't like those actions to trigger the unsaved changes.
* Note: We disabled IE11 because the message jumped also when the user didn't
* change nothing at pages that have textarea, e.g. Payment Options page.
* IE11 trigger on input automatically when the page loaded.
*/
if ( !(platform.name == 'IE' && platform.version == '11.0') ) {
if ( $('#addModuleItemForm:not([data-u-c-d="off"])').length !== 0 ) {
$(window).load(function () {
UnsavedChangesDetector.init( {
form: '#addModuleItemForm'
});
});
}
}
if ($('html[dir=rtl]').length>0) {
$('.dz-hidden-input').css({left:'auto',right:'0px'});
}
$('[data-module-item-confirm=delete]').confirmation({
placement: intrface_align,
title: translations.areYouSure,
btnOkLabel: '<i class="icon-ok-sign icon-white"></i> '+translations.yes+'',
btnCancelLabel: '<i class="icon-remove-sign"></i> '+translations.no+'',
popout: true,
singleton: true,
container: 'body',
btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
onConfirm: function() { return true; }
});
$('[data-rel="links-autocomplete"]').each(function(){
var links = new LinksAutocomplete($(this));
});
/**
* We disable this click function because we want prevent for the users open preview items
* inside the wizard. By disable this function we let the user see the preview on new tab.
*
* On modules modal we give an option to preview an item
*
$('.view-module-item-in-preview').on('click',function(event) {
var $this = $(this);
var url = $this.data('url');
topWindow.viewButtonReload = true;
if (typeof topWindow.PreviewModulePage == 'function') {
event.preventDefault();
topWindow.PreviewModulePage(url);
topWindow.$('#moduleWindow').modal('hide');
} else {
}
});
*/
$(document).on('dragover drop',function ( event ) {
event.preventDefault();
});
InternalModalHandler();
SettingsBox.init();
});
function UploadSingleFile(id,websiteID,pathType,maxFilesize,fileKind,minWidth,minHeight) {
var uploadFile = topWindow.uploadFiles[id];
uploadFile.btns.upload.click(function() {
$(this).tooltip('hide');
});
uploadFile.btns.upload.dropzone({
url: "/versions/"+versionNUM+"/wizard/uploadFile.php",
maxFilesize: maxFilesize,
parallelUploads: 4,
/**
* We must use it so we can get the height and the width of the image that
* upload. But we also the limit the size so it will not cruse the browser.
* We also not activate it in gallery because we don't need it there.
*/
createImageThumbnails: true,
maxThumbnailFilesize: 1.5,
maxFiles: 1,
params: {
w: websiteID,
pathType: pathType,
fieldID: id,
logofix: uploadFile.btns.logofix,
resizeType: uploadFile.resizeType
},
acceptedFiles: fileKind.acceptedFiles,
previewsContainer: false,
dictInvalidFileType: translations.fileTypesErrorMsg.replace('{{acceptedFiles}}',fileKind.acceptedFiles),
dictResponseError: translations.badRequest,
init: function () {
this.on("thumbnail", function(file) {
if ( minWidth != '' && ( minWidth > file.width || minHeight > file.height ) ) {
this.removeFile(file);
uploadFile.progressbar.finish( function() {
var html = '<p>'+translations.sorryTheFileSize.replace('{{minWidth}}',minWidth).replace('{{minHeight}}',minHeight)+'</p>';
html += '<div style="margin-bottom:10px;text-align: center;">';
html += '<button type="button" id="f-s-upload-btn" class="btn btn-sm btn-default" style="margin-bottom:10px;"><i class="ace-icon fa fa-upload"></i> '+translations.sorryTheFileSizeUploadBtn+'</button>';
html += '&nbsp;&nbsp;&nbsp;';
if ( uploadFile.btns.library.length !== 0 ) {
html += '<button type="button" id="f-s-library-btn" class="btn btn-sm btn-primary" style="margin-bottom:10px;"><i class="ace-icon fa fa-folder-o"></i> '+translations.sorryTheFileSizeLibraryBtn+'</button>';
}
html += '</div>';
var fsBootbox = bootbox.dialog({
title: translations.imageIsTooSmall,
message: html
});
trackJsEvent(true,translations.sorryTheFileSize);
$('#f-s-upload-btn').click( function( event ) {
fsBootbox.modal('hide');
uploadFile.btns.upload.get(0).click();
});
if ( uploadFile.btns.library.length !== 0 ) {
$('#f-s-library-btn').click( function( event ) {
fsBootbox.modal('hide');
uploadFile.btns.library.trigger('click');
});
}
});
}
});
this.on("processing", function(file) {
var dropzone = this;
if ( isWizardPage() ) {
topWindow.WizardUndoRedoHandler.buttonsDisable();
}
uploadFile.btns.cancel.off('click').click( function() {
dropzone.removeFile(file);
uploadFile.input.trigger('s123.uploadFile.cancelUpload');
if ( isWizardPage() ) {
topWindow.WizardUndoRedoHandler.buttonsEnable();
}
});
});
},
sending: function (file, xhr, formData) {
uploadFile.progressbar.reset();
uploadFile.progressbar.show();
},
uploadprogress: function (file, progress) {
progress = progress * 0.6;
progress = Math.ceil(progress);
uploadFile.progressbar.update(progress);
uploadFile.input.trigger('s123.uploadFile.uploadProgress');
if ( progress >= 60 ) {
uploadFile.progressbar.start( 500 );
}
},
success: function (file, response) {
var s3Obj;
var error = false;
try {
s3Obj = jQuery.parseJSON(response);
} catch (e) { error = true; }
/**
* Reset the file from the FRAMEWORD after he finish upload
* We need it because we're using MaxFile setting on DropzoneJS.
*/
this.removeFile(file);
uploadFile.progressbar.finish( function() {
if ( error ) {
bootbox.dialog({
title: translations.uploadFailed,
message: translations.uploadFailedInvalidImage,
buttons: {
danger: {
label: translations.ok,
className: "btn-danger btn-sm",
}
}
});
return;
}
UpdateImagePreview(id, { normal: s3Obj.n, tiny: s3Obj.t });
uploadFile.input.val(s3Obj.n).trigger('change',s3Obj);
if (typeof UploadFileFinishUpload_callback !== 'undefined' && $.isFunction(UploadFileFinishUpload_callback)) UploadFileFinishUpload_callback(id);
RemoveFlickrImageFromLicenseField(id,'delete','','','','');
if ( isWizardPage() ) {
AutoSaveWizard(true,true);
}
});
},
error: function (file, errorMessage, xhr) {
uploadFile.progressbar.finish( function() {
if (file && file.status!='canceled') {
bootbox.dialog({
title: translations.uploadFailed,
message: errorMessage,
buttons: {
danger: {
label: translations.ok,
className: "btn-danger btn-sm",
}
}
});
}
});
}
});
}
/**
* Upload Files Progressbar Object.
*
* @param {string} id - The progress bar id e.g. #myProgressbar
*/
function UploadFilesProgressbar( id ) {
var that = this;
this.$pb = $(id);
/**
* Reset the progress bar.
*/
this.reset = function() {
that.update(0);
};
/**
* Abort/Cancel the progress bar.
*/
this.abort = function( callback ) {
if ( callback ) callback();
that.stop();
that.hide();
};
/**
* Show the progress bar.
*/
this.show = function() {
that.disablePageActions(true);
that.$pb.fadeIn('slow');
};
/**
* Hide the progress bar.
*/
this.hide = function() {
that.$pb.fadeOut('slow', function() {
that.reset();
});
that.disablePageActions(false);
};
/**
* Stop the progress bar.
*/
this.stop = function() {
clearInterval(that.refreshProgressbar);
};
/**
* update the progress bar.
*
* @param {integer} percent - The percent number to update.
*/
this.update = function( percent ) {
that.$pb.attr('data-percent',percent + '%').children('.progress-bar').width(percent + '%');
};
/**
* Start the progress bar using interval. This method used when
* we can not estimate the loading time, so we use interval.
*
* @param {integer} interval - The progress bar interval (speed)
*/
this.start = function( interval ) {
/**
* Homepage / Promo Image Filter Handler - We need to reset the image filter
* container every time the user upload a file or choose it from the library.
* At this moment we don't have common place to do it, so we made it from
* the progress-bar area. We need to build a new function, and call here from
* the Dropzone & Library before a file upload is start, then we need to move
* this script and the `uploadFile.progressbar.start` to the new function.
*/
if ( typeof homepageReadyReset == 'function' ) {
if ( this.$pb.get(0).id === 'home_start_image_progressBar'
|| this.$pb.get(0).id === 'home_slider_image_1_progressBar'
|| this.$pb.get(0).id === 'home_video_background_progressBar'
|| this.$pb.get(0).id === 'image_progressBar'
|| this.$pb.get(0).id === 'image-slide-show-1_progressBar'
|| this.$pb.get(0).id === 'video_progressBar' ) {
homepageReadyReset();
}
}
that.show();
this.refreshProgressbar = setInterval(function() {
that.percent = parseInt(that.$pb.attr('data-percent'));
if ( that.percent >= 99 ) {
that.stop();
return;
}
if ( that.percent < 100 ) {
that.percent += 1;
that.update(that.percent);
}
/**
* Sometimes the progress get to 100% before the Ajax complete, we can not estimate when it
* will complete so we give 10 more seconds to end, then the `finish` function will execute.
* To prevent overflow you need to call to `start` function with a bigger interval.
*/
/*
if ( that.percent >= 90 ) {
that.stop();
that.start(1000);
}
*/
},interval);
};
/**
* Finished the progress bar.
*
* @param {function} callback - A callback function to execute when the progress bar finished.
*/
this.finish = function( callback ) {
if ( callback ) callback();
that.stop();
that.update(100);
setTimeout( function() {
that.hide();
}, 500);
};
/**
* The function disable/enable some page actions when the user upload a file
* to prevent the user from exiting the page during the upload process.
* e.g. form submit buttons, close module buttons, etc.
*
* @param {boolean} disable - True = disable, Falsy = Enable.
*/
this.disablePageActions = function( disable ) {
var $submitButtonsArea = $('.SubmitButtonsArea');
var $moduleWindow = topWindow.$('#moduleWindow');
if ( disable ) {
$submitButtonsArea.addClass('disableSaveButtons');
$moduleWindow.find('.modal-header').addClass('disableSaveButtons');
} else {
$submitButtonsArea.removeClass('disableSaveButtons');
$moduleWindow.find('.modal-header').removeClass('disableSaveButtons');
}
};
};
/**
* The function replace system global inputs fields e.g. File, Date, Colorbox, etc.
*/
function BuildInputFields() {
UploadMultipleFilesInitialize();
UploadSingleFilesInitialize();
ColorPickerInitialize();
FontsSelectInitialize();
/**
* Bootstrap Datepicker Initialize
* Documentation : https://eonasdan.github.io/bootstrap-datetimepicker/
*/
$('.date-picker').datepicker({
autoclose: true,
todayHighlight: true,
showClose: true
});
/**
* Bootstrap Datepicker Initialize
* Documentation : https://eonasdan.github.io/bootstrap-datetimepicker/
*/
$('#date-timepicker1').datetimepicker({
showClose: true,
showTodayButton: true,
sideBySide: ace.vars['touch'] ? false : true,
toolbarPlacement: 'bottom',
icons: {
time: 'fa fa-clock-o',
date: 'fa fa-calendar',
up: 'fa fa-chevron-up',
down: 'fa fa-chevron-down',
previous: 'fa fa-chevron-left',
next: 'fa fa-chevron-right',
today: 'fa-clock-o ',
clear: 'fa fa-trash',
close: 'fa fa-times',
todayText: translations.BSDatepicker_today,
closeText: translations.BSDatepicker_close
}
/**
* Chane Event Hander - The date time picker plug-in is not triggering
* the `change` or `input` when the date is changed, because of that our
* `UnsavedChangesDetector` object didn't works so we handle that manually.
*/
}).on('dp.change', function( event ) {
$(this).trigger('input');
}).next().on(ace.click_event, function() {
$(this).prev().focus();
});
/**
* Bootstrap Datepicker Initialize
* Documentation : https://eonasdan.github.io/bootstrap-datetimepicker/
*/
$('[data-rel="datetimepicker"]').each(function(){
var $this = $(this);
$this.datetimepicker({
showClose: true,
showTodayButton: true,
sideBySide: ace.vars['touch'] ? false : true,
toolbarPlacement: 'bottom',
icons: {
time: 'fa fa-clock-o',
date: 'fa fa-calendar',
up: 'fa fa-chevron-up',
down: 'fa fa-chevron-down',
previous: 'fa fa-chevron-left',
next: 'fa fa-chevron-right',
today: 'fa-clock-o',
clear: 'fa fa-trash',
close: 'fa fa-times',
todayText: translations.BSDatepicker_today,
closeText: translations.BSDatepicker_close
}
/**
* Chane Event Hander - The date time picker plug-in is not triggering
* the `change` or `input` when the date is changed, because of that our
* `UnsavedChangesDetector` object didn't works so we handle that manually.
*/
}).on('dp.change', function( event ) {
$(this).trigger('input');
}).next().on(ace.click_event, function() {
$(this).prev().focus();
});
});
InitializeToolTips();
ColorboxInitial('[data-rel="colorbox"]');
/**
* jQuery UI Slider Initialize
* Documentation : http://api.jqueryui.com/slider/
*/
$('[data-rel="slider"]').each(function(){
var $this			= $(this);
var $id				= $($this.data('id'));
var $valueDisplay	= $($this.data('value-display'));
var value			= ($this.text().length !== 0) ? parseInt($this.text(), 10) : 0;
var min				= $this.data('min');
var max				= $this.data('max');
$this.empty().slider({
value: value,
range: "min",
animate: true,
min: min,
max: max,
slide: function( event, ui ) {
$id.val(ui.value).trigger('input');
$valueDisplay.html(ui.value);
}
});
});
if( !ace.vars['touch'] ) {
/**
* jQuery Chosen Initialize
* Documentation : https://harvesthq.github.io/chosen/
*/
$('.chosen-select').each( function() {
var $this = $(this);
if ( $('html[dir=rtl]').length !== 0 ) $this.addClass('chosen-rtl');
$this.chosen();
});
$('.chosen-container.chosen-container-single').width('100%');
$('.chosen-container input').attr('placeholder',translations.search);
}
}
function BuildInterfaceAccorion() {
$('.in-box-widget .widget-box:not(.static)').each( function() {
var $thisBox = $(this);
var $allNunStatic = $('.in-box-widget .widget-box:not(.static)');
$thisBox.find('.widget-header').off('click').on('click',function() {
var $this = $(this);
var id = $this.parent('div[id]').attr('id');
if ( showUpgradeIfWidgetIsLimitedToPro(id) ) return;
/**
* The accordion is added to elements that may have additional ability
* for example in homepage they are also `sortable` and we need to stop the
* click event that opens the accordion when the user is dragging.
*/
if ( $this.data('disable-accordion-ability') === '1' ) return;
$thisBox.trigger('s123-interface-accordion-header-click');
if ($('#'+id).find('.widget-body').is(":visible")) {
$allNunStatic.find('.widget-body:visible').slideUp(400,function() {
$thisBox.trigger('s123-interface-accordion-close');
});
$allNunStatic.find('.widget-header .widget-toolbar i').removeClass('fa-chevron-up');
$allNunStatic.find('.widget-header .widget-toolbar i').addClass('fa-chevron-down');
} else {
$allNunStatic.find('.widget-body:visible').slideUp(400);
$allNunStatic.find('.widget-header .widget-toolbar i').removeClass('fa-chevron-up');
$allNunStatic.find('.widget-header .widget-toolbar i').addClass('fa-chevron-down');
$('#'+id).find('.widget-body').slideDown(400,function(){
$thisBox.trigger('s123-interface-accordion-open');
});
$('#'+id).find('.widget-header .widget-toolbar i').removeClass('fa-chevron-down');
$('#'+id).find('.widget-header .widget-toolbar i').addClass('fa-chevron-up');
}
});
$('.widget-box.activate .widget-body').css('display','block');
$('.widget-box.activate').find('.widget-header .widget-toolbar i').removeClass('fa-chevron-down');
$('.widget-box.activate').find('.widget-header .widget-toolbar i').addClass('fa-chevron-up');
});
/**
* The function is opening the upgrade popup if the widget is limited to premium plans
*
* @param  {string} id - The widget box id we want to check if it is limited to premium plans
* @return {boolean} Unnamed - True for preventing the opening of the accordion / false allow opening the accordion
*/
function showUpgradeIfWidgetIsLimitedToPro( id ) {
switch (id) {
case 'advancedSEOBOX':
if ( ProFeature_isLimit({
'websiteID' : topWindow.websiteID,
'packageNUM' : topWindow.packageNUM,
'toolType' : 'advancedSEO',
}) ) {
topWindow.upgradeFeaturesManager.show('advancedSEOTools');
return true;
}
break;
}
return false;
}
}
/**
* the function jQuery Colorbox Plugin Initial.
* Documentation : http://www.jacklmoore.com/colorbox/
*
* @param {string} selector - A selector of objects we like to initial it on them.
*/
function ColorboxInitial( selector ) {
$(selector).each(function(){
var $this = $(this);
$this.colorbox({
iframe: function() {
return $(this).data('colorbox-iframe') ? true : false;
},
width: function() {
return $(this).data('colorbox-width') ? $(this).data('colorbox-width') : false;
},
height: function() {
return $(this).data('colorbox-height') ? $(this).data('colorbox-height') : false;
},
rel: 'colorbox',
reposition: true,
scalePhotos: true,
scrolling: false,
photo: true,		// Fix browser crash on big images (e.g. 8MB)
previous: false,
next: false,
close: '&times;',
/* we had an issue on the product options items upload files, when we
clicked on the uploaded image and then try to close the color-box pop-up
we got JS error, to fix it we added that `trapFocus: false`.
source: https://stackoverflow.com/a/34803159/469161 */
trapFocus: false,
current: false,
maxWidth: '50%',
maxHeight: '50%',
slideshow: false,
onComplete: function() {
/**
* Disable click on image triggering next image. e.g. when the user clicked
* on the pop-up image they was transferring to the next Colorbox image.
* Source: https://stackoverflow.com/a/47497972/469161
*/
$('#colorbox').find('.cboxPhoto').off('click');
}
});
});
}
/**
* The function store the current input id in the modal parameters and how the selected modal.
*/
function OpenUploadFilesModal( uploadFileInputId, modalId, imageLive, minlibraryWidth ) {
var modal = topWindow.$(modalId);
modal.data('uploadFileInputId', uploadFileInputId );
mixPanelEvent(false,"Open library");
modal.data('minlibraryWidth', minlibraryWidth );
modal.data('froalaEditor',false);
if ( imageLive == true ) {
modal.data('liveUpdate','1');
modal.addClass('imageLibraryLive');
modal.modal({
keyboard: false,
show: false
});
modal.modal('show');
modal.find('.modal-header .close').hide();
modal.find('.modal-header').hide();
modal.find('.modal-footer').hide();
setTimeout(function() {
modal.find('.libraryIframe').css('height','100vh');
topWindow.$('.modal-backdrop').addClass('modal-backdrop-without-opacity');
},200);
} else {
modal.data('liveUpdate','0');
modal.removeClass('imageLibraryLive');
modal.modal({
keyboard: true,
show: false
});
modal.modal('show');
modal.find('.modal-header .close').show();
modal.find('.modal-header').show();
modal.find('.modal-footer').show();
setTimeout(function() {
modal.find('.libraryIframe').height(500);
topWindow.$('.modal-backdrop').removeClass('modal-backdrop-without-opacity');
},200);
}
}
/**
* The function open the System Library modal from the Froala Editor.
*/
function OpenFroalaEditorLibrary() {
var modal = topWindow.$('#imageLibrary');
mixPanelEvent(false,"Open library");
modal.data('uploadFileInputId', null );
modal.data('froalaEditor',true);
modal.data('liveUpdate','0');
modal.removeClass('imageLibraryLive');
modal.modal({
keyboard: true
});
modal.modal('show');
modal.find('.modal-header .close').show();
modal.find('.modal-header').show();
modal.find('.modal-footer').show();
setTimeout( function() {
modal.find('.libraryIframe').height(500);
topWindow.$('.modal-backdrop').removeClass('modal-backdrop-without-opacity');
},200);
}
/**
* Duplicate module item
*/
function DuplicateModuleItem(item) {
$('body').append('<div style="width: 100%; height: 100%; position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: flex; align-content: center; align-items: center; justify-content: center;"><i class="ace-icon fa fa-spinner fa-spin blue fa-4x"></i></div>');
$('.container.theme-showcase').css({ opacity: '0.6', pointerEvents: 'none' });
$.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/modules/duplicateModuleItemAjax.php",
data: 'w='+item.websiteID+'&uniqueID='+item.uniqueID+'&moduleID='+item.moduleID+'',
success: function(data) {
if ( data == 'success' ) location.reload();
}
});
}
function Crop_OpenModal(uploadFileInputId,websiteID) {
topWindow.bootbox.dialog({
className: 's123-modal',
title: translations.cropTool,
size: 'large',
backdrop: true,
message: '<iframe id="cropFilterModal" src="/versions/'+versionNUM+'/wizard/imageFilter/crop.php?w='+websiteID+'&url='+topWindow.uploadFiles[uploadFileInputId].input.val()+'&fieldID='+uploadFileInputId+'" style="width:100%;height:500px;margin:0;padding:0;border:none;"></iframe>'
});
}
function imageFocusPoint_OpenModal(uploadFileInputId,websiteID) {
topWindow.bootbox.dialog({
className: 's123-modal',
title: translations.imageFocusPoint,
size: 'large',
backdrop: true,
message: '<iframe id="imageFocusPointModal" src="/versions/'+versionNUM+'/wizard/imageFilter/imageFocusPoint.php?w='+websiteID+'&url='+topWindow.uploadFiles[uploadFileInputId].input.val()+'&fieldID='+uploadFileInputId+'" style="width:100%;height:620px;margin:0;padding:0;border:none;"></iframe>'
}).on("hidden.bs.modal", function() {
if ( isWizardPage() ) {
if (  $('#parallax_homepage_image').is(":checked") ) {
AutoSaveWizard(true,true);
} else {
window.reloadPreviewCSS = ReloadPreviewCSS;
AutoSaveWizard(false,true);
}
}
});
}
function Filter_OpenModal(uploadFileInputId,websiteID) {
topWindow.bootbox.dialog({
className: 's123-modal bootbox-modal-xlg',
title: 'Image Filter Tool',
size: 'large',
backdrop: true,
message: '<iframe id="imageFilterModal" class="modal-xlg-height" src="/versions/'+versionNUM+'/wizard/imageFilter/index.php?w='+websiteID+'&imagePath='+topWindow.uploadFiles[uploadFileInputId].input.val()+'&fieldID='+uploadFileInputId+'" style="width:100%;margin:0;padding:0;border:none;"></iframe>'
});
}
function RemoveFileFromUpload( id ) {
topWindow.uploadFiles[id].btns.preview.hide();
topWindow.uploadFiles[id].input.val('').trigger('change');
topWindow.uploadFiles[id].btns.previewIcon.hide();
topWindow.uploadFiles[id].btns.remove.hide();
topWindow.uploadFiles[id].btns.filter.hide();
topWindow.uploadFiles[id].btns.crop.hide();
topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
if ( isWizardPage() ) {
AutoSaveWizard(true,true);
}
}
function UploadFlickrImage(websiteID, image_id, url, image_name, image_owner_name, image_owner_username) {
var modal = topWindow.$('#imageLibrary');
var uploadFileInputId = modal.data('uploadFileInputId');
var uploadFile = topWindow.uploadFiles[uploadFileInputId];
uploadFile.progressbar.start(100);
$.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/uploadFileFromURL.php",
data: {
w: websiteID,
url: url
},
success: function(data) {
data = jQuery.parseJSON(data);
uploadFile.progressbar.finish(function() {
UpdateImagePreview(uploadFileInputId, { normal: data.n, tiny: data.t });
uploadFile.input.val(data.n).trigger('change');
if ( isWizardPage() ) {
AutoSaveWizard(true,true);
}
});
}
});
RemoveFlickrImageFromLicenseField(uploadFileInputId, 'add', image_id, image_name, image_owner_name, image_owner_username);
}
function UploadLocalLibraryImage(websiteID, image, url) {
var modal = topWindow.$('#imageLibrary');
var uploadFileInputId = modal.data('uploadFileInputId');
var uploadFile = topWindow.uploadFiles[uploadFileInputId];
uploadFile.progressbar.start(100);
var ajax = $.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/uploadFileFromURL.php",
data: {
w: websiteID,
url: url,
libraryImageDetails: JSON.stringify(image)
},
success: function( s3Obj ) {
s3Obj = jQuery.parseJSON(s3Obj);
uploadFile.progressbar.finish(function() {
UpdateImagePreview(uploadFileInputId, { normal: s3Obj.n, tiny: s3Obj.t });
uploadFile.input.val(s3Obj.n).trigger('change',s3Obj);
if ( isWizardPage() ) {
AutoSaveWizard(true,true);
}
});
}
});
uploadFile.btns.cancel.off('click').click( function() {
uploadFile.progressbar.abort( function() { ajax.abort(); } );
});
RemoveFlickrImageFromLicenseField(uploadFileInputId,'delete','','','','');
}
function UploadPixabayLibraryVideo(websiteID, id, url) {
var modal = topWindow.$('#videoLibrary');
var uploadFileInputId = modal.data('uploadFileInputId');
var uploadFile = topWindow.uploadFiles[uploadFileInputId];
uploadFile.progressbar.start(100);
var ajax = $.ajax({
type: "POST",
url: "/versions/"+versionNUM+"/wizard/uploadFileFromURL.php",
data: {
w: websiteID,
url: url
},
success: function(data) {
data = jQuery.parseJSON(data);
uploadFile.progressbar.finish(function() {
UpdateImagePreview(uploadFileInputId, { normal: data.n, tiny: data.t });
uploadFile.input.val(data.n).trigger('change');
if ( isWizardPage() ) {
filterHomepageOptionsList();
AutoSaveWizard(true,true);
}
});
}
});
uploadFile.btns.cancel.off('click').click( function() {
uploadFile.progressbar.abort( function() { ajax.abort(); } );
});
RemoveFlickrImageFromLicenseField(uploadFileInputId,'delete','','','','');
}
function RemoveFlickrImageFromLicenseField(uploadFileInputId, action, image_id, image_name, image_owner_name, image_owner_username) {
var $flickrLicenses = $('#flickrLicenses');
if ( $flickrLicenses.length == 0 ) return;
if ($flickrLicenses.val() != '') {
var obj = $.parseJSON($flickrLicenses.val());
var objClone = clone(obj);
$.each(obj, function( index, value ) {
if (value.field == topWindow.uploadFiles[uploadFileInputId].id) {
objClone.splice(index, 1);
}
});
if ( action == 'add' ) {
objClone.push({
"field" : topWindow.uploadFiles[uploadFileInputId].id,
"image_id": encodeURIComponent(image_id),
"image_name": encodeURIComponent(image_name),
"image_owner_name": encodeURIComponent(image_owner_name),
"image_owner_username": encodeURIComponent(image_owner_username)
});
$flickrLicenses.val(JSON.stringify(objClone));
}
} else {
if ( action == 'add' ) {
$flickrLicenses.val('[{"field":"'+topWindow.uploadFiles[uploadFileInputId].id+'","image_id":"'+encodeURIComponent(image_id)+'","image_name":"'+encodeURIComponent(image_name)+'","image_owner_name":"'+encodeURIComponent(image_owner_name)+'","image_owner_username":"'+encodeURIComponent(image_owner_username)+'"}]');
}
}
}
function UploadIconImage( icon ) {
var modal = topWindow.$('#imageIcons');
var uploadFileInputId = modal.data('uploadFileInputId');
topWindow.uploadFiles[uploadFileInputId].input.val('site123-image-icon ' + icon).trigger('change');
modal.modal('hide');
UpdateImagePreview(uploadFileInputId, { icon: icon });
if ( isWizardPage() ) {
AutoSaveWizard(true,true);
}
}
/**
* The function is returning the file type that we are supporting.
*
* Note: if the file type is not supported the function will return false
*
* Solution: https://stackoverflow.com/a/173876
*
* @param {string} fileUrl - The file url
* @return {string} Unnamed - video / image
*/
function UploadFile_GetFileType( fileUrl ) {
var vidExt = '.mp4, .m4v, .mov, .avi, .wmv, .webm, .flv, ';
var imgExt = '.jpeg, .jpg, .png, .gif, .bmp';
if ( fileUrl.indexOf('unsplash') != -1 ) return 'image';
var fileExt = fileUrl.split('.').pop();
if ( fileExt.length > 0 && vidExt.indexOf(fileExt) != -1 ) return 'video';
if ( fileExt.length > 0 && imgExt.indexOf(fileExt) != -1 ) return 'image';
return false;
}
/**
* The function update the upload files preview area.
* @param {object} preview.icon - FontAwesome icon class.
* @param {object} preview.normal - Normal size Image path.
* @param {object} preview.tiny - Tiny size Image path.
*/
function UpdateImagePreview( id, preview ) {
var uploadFile = topWindow.uploadFiles[id];
var file_extension = preview.normal ? preview.normal.split('.').pop() : '';
/* File kind 5 is dynamic which means the user can upload video and images and according to that
we need to decide what to show him so we use the flag `uploadFile.kind.previewStatic` to detect if it is
and image or a video */
if ( uploadFile.kind.kind == 5 ) {
uploadFile.kind.previewStatic = UploadFile_GetFileType(preview.normal) === 'video';
}
if ( uploadFile.kind.previewStatic ) {
uploadFile.btns.previewStatic.attr('href', preview.normal);
uploadFile.btns.previewStatic.show();
uploadFile.btns.preview.hide();
topWindow.uploadFiles[id].btns.filter.hide();
topWindow.uploadFiles[id].btns.crop.hide();
topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
} else {
if ( preview.icon ) {
uploadFile.btns.previewIcon.find('i').attr('class','ace-icon fa ' + preview.icon);
uploadFile.btns.previewIcon.show();
uploadFile.btns.preview.hide();
} else {
if ( preview.normal.length > 0 && preview.tiny.length > 0 ) {
if ( file_extension === 'gif' ) {
uploadFile.btns.preview.attr('href',preview.normal);
uploadFile.btns.preview.find('img').attr('src',preview.normal);
} else if ( uploadFile.resizeType === 'pwaIcon' ) {
uploadFile.btns.preview.attr('href',preview.normal);
uploadFile.btns.preview.find('img').attr('src',preview.tiny);
} else {
uploadFile.btns.preview.attr('href',preview.normal.replace("normal_", "1600_"));
uploadFile.btns.preview.find('img').attr('src',preview.tiny);
}
uploadFile.btns.preview.show();
uploadFile.btns.previewIcon.hide();
uploadFile.btns.previewStatic.hide();
/* has properties but no values - update the preview and exit because we don't have the values we don't need to show
the global buttons, note the flow is the same as `RemoveFileFromUpload` function */
} else {
topWindow.uploadFiles[id].btns.preview.hide();
topWindow.uploadFiles[id].btns.previewIcon.hide();
topWindow.uploadFiles[id].btns.previewStatic.hide();
topWindow.uploadFiles[id].btns.remove.hide();
topWindow.uploadFiles[id].btns.filter.hide();
topWindow.uploadFiles[id].btns.crop.hide();
topWindow.uploadFiles[id].btns.imageFocusPoint.hide();
return;
}
}
}
uploadFile.btns.remove.show();
if ( preview.icon ) {
uploadFile.btns.filter.hide();
uploadFile.btns.crop.hide();
uploadFile.btns.imageFocusPoint.hide();
} else if ( preview.patterns ) {
uploadFile.btns.filter.hide();
uploadFile.btns.crop.hide();
uploadFile.btns.imageFocusPoint.hide();
} else {
if ( file_extension === 'gif' ) {
uploadFile.btns.filter.hide();
uploadFile.btns.crop.hide();
} else {
if ( !uploadFile.kind.previewStatic ) {
uploadFile.btns.filter.show();
uploadFile.btns.crop.show();
}
}
if ( !uploadFile.kind.previewStatic ) {
uploadFile.btns.imageFocusPoint.show();
}
}
}
/**
* The function convert special characters to HTML entities, we use it when
* we add strings into HTML attributes, it used to prevent the breaks in
* the HTML e.g. title="abc"efg".
*
* Source: http://stackoverflow.com/questions/1787322/htmlspecialchars-equivalent-in-javascript
*/
function escapeHtml(text) {
if ( !text ) return text;
var map = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
"'": '&apos;'
};
return text.toString().replace( /[&<>"']/g, function( m ) { return map[m]; } );
}
/**
* The function handle the internal modal. We had a lot of different modal types
* so instead of creating a new modal every time we create that internal modal.
* we use it at the wizard but also at the dashboard so we set that handler here.
* e.g. Dashboard >> eCommerce >> Settings >> Configurations >> Customize Order
* Form >> Terms / Privacy.
*/
function InternalModalHandler() {
$('#internalModal').on('show.bs.modal', function (event) {
var $modal = $(this);
$modal.find('.modal-title').html(escapeHtml($modal.data('title')));
var heighestHeightNUM = $(window).outerHeight(true)-170;
$modal.find('.modal-body').html('<iframe id="internalModalIframe" src="' + $modal.data('url') + '" style="width: 100%;height: '+heighestHeightNUM+'px;margin: 0;padding: 0;border: none;"></iframe>');
});
$('#internalModal').on('hide.bs.modal', function (event) {
var $modal = $(this);
$modal.data('title','');
$modal.data('url','');
$modal.find('.modal-body').empty();
});
}
/**
* The function decode the sent string.
*/
function urldecode(str) {
return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}
/**
* The function is refreshing the color pallet preview
*/
function themeStyleChange() {
var theme_style = $('#theme_style').val().toLowerCase();
var colorObj = jQuery.parseJSON(style_themes[theme_style]);
$("#global_main_color").spectrum('set',colorObj['global_main_color']);
$("#menu_color").spectrum('set',colorObj['menu_color']);
$("#menu_text_color").spectrum('set',colorObj['menu_text_color']);
$("#menu_text_hover_color").spectrum('set',colorObj['menu_text_hover_color']);
$("#menu_thin_border").spectrum('set',colorObj['menu_thin_border']);
$("#module_separate_border_color").spectrum('set',colorObj['module_separate_border_color']);
$("#footer_back").spectrum('set',colorObj['footer_back']);
$("#footer_text").spectrum('set',colorObj['footer_text']);
$("#modules_color").spectrum('set',colorObj['modules_color']);
$("#modules_color_text").spectrum('set',colorObj['modules_color_text']);
$("#modules_color_box").spectrum('set',colorObj['modules_color_box']);
$("#modules_color_text_box").spectrum('set',colorObj['modules_color_text_box']);
$("#modules_color_second").spectrum('set',colorObj['modules_color_second']);
$("#modules_color_text_second").spectrum('set',colorObj['modules_color_text_second']);
$("#modules_color_second_box").spectrum('set',colorObj['modules_color_second_box']);
$("#modules_color_text_second_box").spectrum('set',colorObj['modules_color_text_second_box']);
themeStyleChange_preview();
if ( theme_style == 'custom' ) {
$('#customColors').show();
} else {
$('#customColors').hide();
}
}
/**
* The function is refreshing the color pallet preview
*/
function themeStyleChange_preview() {
$('.style_color_pel_row_active').find('[data-field=menu_color]').css('background-color',$("#menu_color").val());
$('.style_color_pel_row_active').find('[data-field=global_main_color]').css('background-color',$("#global_main_color").val());
$('.style_color_pel_row_active').find('[data-field=modules_color]').css('background-color',$("#modules_color").val());
$('.style_color_pel_row_active').find('[data-field=modules_color_second]').css('background-color',$("#modules_color_second").val());
}
function fontsGlobalChange() {
var all_fonts = $('#all_fonts').val();
$('#font_menu,#font_modules_header,#global_font').val(all_fonts).trigger('change.demo_element_update');
$('#all_fonts_box').hide();
}
function ShowOrHideCustomFontsSelect() {
var all_fonts = $('#all_fonts').val();
if ( all_fonts!=$('#font_menu').val() || all_fonts!=$('#font_modules_header').val() || all_fonts!=$('#global_font').val() ) {
$('#all_fonts_box').show();
}
}
/**
* Links Inputs Autocomplete Class.
*/
function LinksAutocomplete( $input ) {
var that = this;
var websiteID = $input.data('website-id');
var versionNUM = $input.data('version-num');
if ( $('#jqAutocompleteCss').length === 0) $('head').append('<style id="jqAutocompleteCss">.ui-autocomplete { max-height: 100px; overflow-y: auto; overflow-x: hidden; z-index: 9999;} </style>');
var template = '<div class="input-group"><span class="input-group-btn"><button type="button" class="btn btn-sm btn-primary" style="line-height:1.4" title="'+translations.websitePages+'"><i class="ace-icon fa fa-file-o"></i></button></span></div>';
var $container = $(template).insertAfter($input).prepend($input);
$container.find('button').click( function() {
that.openList = true;
that.init();
});
$input.focus( function() {
that.init();
});
/**
* The function initialize the Auto-complete object.
*/
that.init = function() {
if ( !that.pages ) {
that.getPages( that.init );
return;
}
/**
* jQuery Autocomplete Plugin Initial
* Documentation : https://jqueryui.com/autocomplete/
*/
if ( !$input.autocomplete('instance') ) {
$input.autocomplete({
source: that.pages,
minLength: 0,
change: function( event, ui ) {
$input.trigger('change');
},
select: function( event, ui ) {
$input.trigger('change');
}
});
}
if ( that.openList ) {
that.openList = false;
$input.autocomplete('search','');
$input.focus();
}
};
/**
* The function get the website pages list and call to a callback function.
*
* @param {function} callback - A callback function (optional).
*/
that.getPages = function ( callback ) {
$.ajax({
url: '/versions/'+versionNUM+'/wizard/include/pagesList.php',
type: "POST",
dataType: "json",
data: {
w: websiteID
},
success: function( pages ) {
that.pages = pages;
if (callback) callback();
}
});
};
}
/**
* The function check for valid e-mail (copied from jQuery Validator)
*/
function emailValidator( email ) {
return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}
/**
* Settings Box initialize
*/
var SettingsBox = new function() {
var that = this;
/**
* Initialize
*/
that.init = function() {
that.$buttons = $('.btnSettings');
that.$box = $('.buttonSettingBox');
that.$cover = $('<div class="s-b-cover"></div>');
$('#wizardBox > .tabbable').append(that.$cover);
that.$box.each(function( index, box ) {
var $this = $(this);
var $close = $('<div class="s-b-c"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
$close.find('.close').on('click', function() {
that.hide();
});
/* some elements also need to be shown in the setting box such as
homepage `goal type` and `text align` so we clone them */
addElementsToSettingBox($this.find('[data-clone-el="true"]'));
$this.prepend($close);
});
};
/**
* The method is hiding all the settings boxes
*/
that.hide = function() {
that.$buttons.each(function() {
$(this)
.data('sb-status','close')
.removeClass('btn-info')
.css({ position: 'static' });
});
$('.settings-boxes-backdrop').remove();
that.$box.fadeOut(100,function() {
that.$box.hide();
that.$box.trigger('settings_box_handler.hide');
});
that.$cover.hide();
resetFullSizeAbilty();
$(document).off('mousedown.button-setting-box-mouse-click');
};
/**
* The function is cloning the original elements to the settings box.
*
* Note: We user this function when we want to show the same element also in the setting box
* for example home page `goal type` / homepage `text align` setting are also shown in the settings box.
*
* @param {jq object} $containers - The containers that hold the cloned elements
*/
function addElementsToSettingBox( $containers ) {
$.each($containers, function( index, container ) {
var $container = $(this);
var $originalEl = $($container.data('original-el-id'));
var $clone = $originalEl.clone();
if ( $originalEl.attr('id') === 'homepage_goal_type' ) {
$clone.children().first().remove();
}
$clone.on('change', function() {
$originalEl.val($(this).val()).trigger('change');
});
$originalEl.on('change.update_s_b_clone', function() {
$clone.val($(this).val());
});
$container.append($clone);
});
}
/**
* The function is removing the class `s-b-full-size` from the setting box and its parents
* on hiding because we add them only when we show the setting box
*/
function resetFullSizeAbilty() {
that.$box.removeClass('s-b-full-size');
that.$box.closest('.s-b-container').removeClass('s-b-full-size');
that.$box.closest('.tab-content').removeClass('s-b-full-size');
}
return that;
}();
/**
* The function handle the system settings boxes (open/close).
*/
function SettingsBoxHandler( $btn, $settingBox ) {
if ( $btn.data('sb-status') === 'open' ) {
SettingsBox.hide();
return;
}
SettingsBox.hide();
$(document).on('mousedown.button-setting-box-mouse-click', function ( event ) {
var $target = $(event.target);
/* modal click - when user have opened modal it is also included in this click but we don't want to close the settings box
so we are checking if the target is modal and return */
if ( $target.closest('.modal.s123-modal').length !== 0 ) return;
if ( $target.closest('ul.ui-autocomplete').length !== 0 ) return;
/* in some cases we have a color picker in the setting box so we don't need to close the setting box when the user
is selecting colors */
if ( $target.closest('.sp-container').length !== 0 ) return;
if ( $target.closest('.buttonSettingBox').length === 0 ) {
SettingsBox.hide();
}
if ( $target.closest('.btnSettings').length !== 0 ) {
$btn.data('sb-status','open');
}
});
if ( $btn.data('s-b-o-s') ) {
$settingBox.css({ top: $btn.closest('.form-group').find($btn.data('s-b-o-s')).outerHeight() });
/**
* Full Size Setting Box - When the setting box is a full size we are
* disabling the `static` position of the setting box parents so the absolute position will be calculated
* from `tabbable` element because it is the root element that contains the tab content and this way
* we can stretch the setting box above the content
*/
} else if ( $btn.data('full-size') ) {
$settingBox.addClass('s-b-full-size');
$settingBox.closest('.s-b-container').addClass('s-b-full-size');
$settingBox.closest('.tab-content').addClass('s-b-full-size');
} else {
$settingBox.css({ top: $btn.closest('.form-group').outerHeight() });
}
if ( !$btn.data('skip-design-fix') ) {
$btn
.addClass('btn-info')
.css({ position: 'relative' });
}
$settingBox.fadeIn(100, function() {
$settingBox.trigger('settingBoxOpen');
});
$btn.tooltip('hide');
/**
* Every time we open the setting box we need to show the cover behind it so but we don't want
* to cover the website preview so we are setting the z-index lower by 1 then the preview.
*/
SettingsBox.$cover.css({
zIndex: $('#previewBox').css('z-index')-1
});
SettingsBox.$cover.fadeIn(100);
$settingBox.trigger('settings_box_handler.show');
if ( $settingBox.find('.scrollSectionSelect').length > 0 ) {
ResetButtonsScrollSectionList($settingBox.find('.scrollSectionSelect'));
}
}
/**
* The function sort select options by value
*
* The function replacing the sort options by using jquery append so
* after the replace you need the initialize the select events again
*
* @param {object} $select - Jquery select object
*/
function SortSelectOptions( $select ) {
var options = $select.find('option');
var selected = $select.val();
options.sort(function(a,b) {
if (a.text > b.text) return 1;
if (a.text < b.text) return -1;
return 0
})
$select.empty().append(options);
$select.val(selected);
}
/**
* This function add tooltip on each currency symbol in the interface by
* this tooltip we explain to the user where to change the currency
*/
function CurrencySymbolToolTip() {
$('.currency-symbol').attr('data-rel','tooltip');
$('.currency-symbol').attr('data-title', translations.CurrencySymbolToolTip);
}
/**
* This function add tooltips on each measurements units (weight and length) in the interface by
* this tooltip we explain to users where to change the weight and length measurements units.
*/
function MeasurementsUnitToolTip() {
$('.weight-unit, .length-unit').attr('data-rel','tooltip');
$('.weight-unit').attr('data-title', translations.WeightUnitToolTip);
$('.length-unit').attr('data-title', translations.LengthUnitToolTip);
}
/**
* The function get the external video thumbnail using the video URL address.
*
* @param {object} $thumbnail - Video thumbnail input object.
* @param {object} url - Video URL.
* @param {object} deferred - Use when we need to detect when the Ajax is finished.
*/
function SetExternalVideoThumbnail( $thumbnail, url, deferred ) {
if ( url.indexOf("youtube.com") > -1 ) {
/**
* Get the video thumbnail
* Source: https://stackoverflow.com/a/2068371/469161
*/
if ( url.indexOf("v=") > -1 ) {
if ( url.indexOf("&") > -1 ) {
$thumbnail.videoId = String(url).substring(url.indexOf("v=")+2,url.indexOf("&"));
} else {
$thumbnail.videoId = String(url).substring(url.indexOf("v=")+2,url.length);
}
}
$thumbnail.val('https://img.youtube.com/vi/' + $thumbnail.videoId + '/hqdefault.jpg');
if ( deferred ) deferred.resolve();
} else if ( url.indexOf("vimeo.com") > -1 ) {
$.ajax({
type:'GET',
url: 'https://vimeo.com/api/oembed.json?url=' + encodeURIComponent(url),
dataType: 'json',
success: function( data ) {
$thumbnail.val(data.thumbnail_url);
if ( deferred ) deferred.resolve();
}
});
}
}
/**
* The function get extract only the file name from the sent path.
* Source: https://stackoverflow.com/a/423385/469161
*
* @param {string} path - A file path, e.g. "//domain.com/file/image.jpg"
* @return {string} - The file name e.g. "image.jpg"
*/
function getFileName( path ) {
if ( !path ) return path;
return path.replace(/^.*(\\|\/|\:)/,'');
}
/**
* The function check if a Bootstrap modal is open.
* Documentation : https://stackoverflow.com/a/21341587/469161
*/
function isBsModalOpen( modalId ) {
return ($(modalId).data('bs.modal') || {isShown: false}).isShown
}
/**
* The function update the user about saved successful.
* Documentations: https://github.com/jboesch/Gritter/wiki
*/
function gritter_update( title, class_name ) {
if ( !window.gritter_unique_id ) {
window.gritter_unique_id =  $.gritter.add({
title: title ? title : translations.saveUpdateSuccessful,
class_name: class_name ? class_name : 'gritter-success',
time: 1000
});
} else {
$.gritter.remove(window.gritter_unique_id, {
fade: false, // optional
speed: 'fast' // optional
});
window.gritter_unique_id = false;
gritter_update(title,class_name);
}
}
/**
* Extend jQuery with a function that handle the URL parameters.
* IE11 browser is not suppose `URLSearchParams()` so we use that
* plugin to implement URL changes until we will stop support IE11.
* Source: https://stackoverflow.com/a/3855394/469161
*/
jQuery.QueryString = (function(paramsArray) {
let params = {};
for (let i = 0; i < paramsArray.length; ++i)
{
let param = paramsArray[i]
.split('=', 2);
if (param.length !== 2)
continue;
params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
}
return params;
})(window.location.search.substr(1).split('&'));
/**
* The function replace a parameter value in the sent URL.
* Source: https://stackoverflow.com/a/20420424/469161
*/
function replaceUrlParam( url, paramName, paramValue ) {
if ( paramValue == null ) {
paramValue = '';
}
var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
if ( url.search(pattern) >= 0 ) {
return url.replace(pattern,'$1' + paramValue + '$2');
}
url = url.replace(/[?#]$/,'');
return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
}
/**
* Get the closest top parent of the window on the same domain
* to prevent cross origin domain error.
*/
var topWindow = function() {
var win = window;
var top = win;
while ( win.parent != win ) {
try {
win.parent.document;
top = win.parent;
} catch (e) {}
win = win.parent;
}
return top;
}();
/**
* The function check if the current user browser id Chrome.
* Source: https://stackoverflow.com/a/13348618/469161
*/
function isChromium() {
var isChromium = window.chrome,
winNav = window.navigator,
vendorName = winNav.vendor,
isOpera = winNav.userAgent.indexOf("OPR") > -1,
isIEedge = winNav.userAgent.indexOf("Edge") > -1,
isIOSChrome = winNav.userAgent.match("CriOS");
if (isIOSChrome) {
return true;
} else if (
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc." &&
isOpera === false &&
isIEedge === false
) {
return true;
} else {
return false;
}
}
/**
* The function get a UTC date and convert it to the user local date.
*
* @param {string} utcDate = UTC date.
* @return {string} localDate = User local date.
*/
function ConvertUtcToLocalTime( utcDate ) {
var utcDateObj = moment.utc(utcDate);
var localDate = moment(utcDateObj).local();
return localDate.format("YYYY-MM-DD HH:mm:ss");
}
/**
* The function trying to parse the sent JSON string, we use it to prevent
* JS error if the JSON is not valid from some reason.
*
* @param {string} str - JSON string.
* @param {function} faildCallback - Callback function to execute on failed parse (optional).
* @return {object} Obj - Valid Object or False if the sent JSON string is invalid.
*/
function tryParseJSON( str, faildCallback ) {
try {
var Obj = JSON.parse(str);
if ( Obj && typeof Obj === "object" ) {
return Obj;
}
} catch (e) {}
if ( faildCallback ) faildCallback.call(this);
return false;
}
/**
* This function checking if for this website we need to open premium features.
* If so we'll return higher packageNUM, else we'll return the exist packageNUM.
*/
function OpenPremiumFeatures( packageNUM ) {
if ( topWindow.openPremiumFeatures && $.isNumeric(topWindow.openPremiumFeatures) ) return topWindow.openPremiumFeatures;
return packageNUM;
}
/**
* The function is checking if the char belong to a language that
* is RTL.
* @param  {char} - first char of the language.
* @return {boolean} - true if the char is RTL / False if the char is LTR
*/
function isRtlLanguage( char ) {
var ltrChars    = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF'+'\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
rtlChars    = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
rtlDirCheck = new RegExp('^[^'+ltrChars+']*['+rtlChars+']');
return rtlDirCheck.test(char);
}
/**
* The function is initializing all Bootstrap Tooltip.
* Documentation : https://getbootstrap.com/docs/3.4/javascript/#tooltips
*/
function InitializeToolTips() {
if (!ace.vars['touch']) {
$('[data-rel=tooltip]').tooltip({
container: 'body',
placement: 'auto'
});
$('[data-rel=tooltip-desk]').tooltip({
container: 'body',
placement: 'auto'
});
$('[data-rel=tooltip-preview-scale-devices]').tooltip({
container: 'body',
placement: 'auto',
template: '<div class="tooltip preview-scale-devices-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
delay: {
show: 2000,
hide: 0
}
});
} else {
$('[data-rel=tooltip]').tooltip({
container: 'body',
placement: 'auto'
});
}
}
/**
* The function initialize the auto-complete for the sent input.
*
* @param {jquery object} $input - The input that will are adding the auto complete ability.
* @param {array} items - Auto complete items that will be shown on drop down.
* @param {object} settings - Initialize object that will contain more property such as callback function
*/
function autocomplete_initialize( $input, items, settings ) {
/**
* jQuery Autocomplete Plugin Initial
* Documentation : https://jqueryui.com/autocomplete/
*/
$input
.autocomplete({
source: items,
minLength: 0,
autoFocus: true,
select: function (event, ui) {
if ( settings.callback ) settings.callback.call(this,event, ui);
}
})
.click(function( event ) {
$(this).autocomplete('search','');
});
/**
* Add New Values Handler - We like to show new added values at the Autocomplete
* results, at this way the user will understand that he can add new values and not
* only choose from the available items.
*/
if ( settings.showNewItems ) {
$input.on('autocompletesearch', function( event, ui ) {
var new_item_id = 'new_item';
var new_item_index;
var item_exist;
$.each(items, function( index, value ) {
if ( value.id === new_item_id ) {
new_item_index = index;
return true;
}
if ( value.label.toLowerCase() === $input.val().toLowerCase() ) {
item_exist = true;
}
});
if ( item_exist || $input.val().length === 0 ) {
if ( $.isNumeric(new_item_index) ) {
items.splice(new_item_index,1);
$input.autocomplete("option",items);
}
return;
}
if ( $.isNumeric(new_item_index) ) {
items[new_item_index].label =  translations.autocompleteAddNewValue.replace('{{value}}',$input.val());
items[new_item_index].value = $input.val();
} else {
items.push({
id: new_item_id,
label: translations.autocompleteAddNewValue.replace('{{value}}',$input.val()),
value: $input.val()
});
}
$input.autocomplete("option",items);
});
}
/**
* Highlight Matched Items - We like to highlight the matched items
* so the user will understand that his search query match an exist
* iten, to do it we custom-format the Autocomplete results.
* Source: https://stackoverflow.com/a/2436493/469161
*/
$input.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
if ( item.label.toLowerCase() === this.term.toLowerCase() ) {
return $('<li class="ui-state-focus">'+item.label+'</li>')
.data('item.autocomplete',item)
.appendTo(ul);
} else {
return $('<li>'+item.label+'</li>')
.data('item.autocomplete',item)
.appendTo(ul);
}
};
$input.onEnterKey(function (event) {
$input.autocomplete('close');
return true;
});
}
/**
* Ajax Manager - The object manage an Ajax Queue list.
*/
var AjaxQueueManager = new function () {
var requests = [];
this.ready = true;
/**
* The function add a new request.
*/
this.add = function( request ) {
requests.push(request);
};
/**
* The function start executing the Ajax requests at the same order they added.
*/
this.start = function( x ) {
if ( requests.length === 0 ) {
this.ready = true;
return;
}
this.ready = false;
var request = requests.shift();
$.post(request.url,request.data).done(request.done);
};
};
/**
* The function limit pro features and display the upgrade modal according to our limitation rules.
*
* {object} settings - Settings object.
*/
function ProFeature_limit( settings ) {
if ( ProFeature_isLimit(settings) ) {
if ( settings.modalParent ) {
parent.upgradeFeaturesManager.show(settings.featureID);
} else {
upgradeFeaturesManager.show(settings.featureID);
}
if ( settings.callback ) settings.callback.call(this,true);
} else {
if ( settings.callback ) settings.callback.call(this,false);
}
}
/**
* The function add PRO label to the limit pro features.
*
* {object} settings - Settings object.
*/
function ProFeature_addLabel( settings ) {
if ( ProFeature_isLimit(settings) ) {
var html = '<span class="label pro-feature-label" style="text-transform: uppercase;">' + (settings.text ? settings.text : translations.premium ) + '</span>';
settings.$element.append($(html));
}
}
/**
* The function add block div on limit pro feature.
*
* {object} settings - Settings object.
*/
function ProFeature_addBlockDiv( settings ) {
if ( ProFeature_isLimit(settings) ) {
var html = '<div class="premiumFeatureDesign premiumFeatureMessageItem transform-centering" data-rel="tooltip" title="' + translations.proFeaturelimited + '"><a class="btn btn-danger btn-sm lockMessage fa fa-lock"></a></div>';
var $html = $(html);
$html.tooltip({
container: 'body',
placement: 'auto'
});
$html.click(function() {
parent.upgradeFeaturesManager.show(settings.featureID);
});
settings.$element.addClass('premiumFeature').append($html);
settings.$element.find('input, select').attr('disabled','disabled');
}
}
/**
* The function limit pro features according to our limitation rules.
*
* {object} settings - Settings object.
* {boolean} unnamed - True if we need to limit this feature, otherwise false.
*/
function ProFeature_isLimit( settings ) {
var limitedToPackageNUM = settings.limitedToPackageNUM ? settings.limitedToPackageNUM : '1';
var limitProFeatures = {
'websiteID' : {
'2' : 1801842,
'96' : 1801842,
'112' : 1808579,
'123' : 1801842,
'52' : 1808579,
'17' : 1808579,
'websitePassword': 1808579,
'customLabels': 1,
'membersOnly': 1,
'statistics': 1,
'confirmedMembersOnly': 1,
'wishList': 1,
'faq': 1,
'advancedSEO': 1,
'statistics': 1,
'review': 1,
'setUniqueDomain': 1,
'redirectDomains': 1,
'mailboxes': 1,
'externalLink': 1
},
'userID' : {
'showHeaderSearch' : 1537397
}
};
var local = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
if ( local == 'http://local.site123.com' ) {
$.each(limitProFeatures, function(limitType){
$.each(limitProFeatures[limitType], function(toolType){
limitProFeatures[limitType][toolType] = 1;
});
});
}
if ( OpenPremiumFeatures(settings.packageNUM) > limitedToPackageNUM ) return false;
if ( settings.userID && limitProFeatures.userID[settings.toolType] < settings.userID ) return true;
if ( settings.websiteID && limitProFeatures.websiteID[settings.toolType] < settings.websiteID ) return true;
return false;
}
/**
* The function check if the user is at our wizard page or not.
*/
function isWizardPage() {
return typeof AutoSaveWizard == 'function';
}
/**
* Upgrade Features Manager Class
*/
var upgradeFeaturesManager = new function() {
var that = this;
that.proFeatures = {};
/**
* Initialize class
*/
that.init = function( settings ) {
if ( !settings ) return;
that.websiteID = settings.websiteID;
that.packageNUM = settings.packageNUM;
that.proFeatures = settings.proFeatures;
that.$upgradePackage = $('#upgradePackage');
if ( Object.keys(that.proFeatures).length === 0 ) return;
that.$message = $(generateMessageHtml());
that.$content = that.$message.find('.content');
that.$tabs = that.$message.find('.side-menu > li');
that.page = settings.page;
/**
* Overwrite the original upgrade modal
* Important Note: We do this here because of 2 reasons:
* 	1. The upgrade modal also exists in the mdash.php and we can't touch it while we are running `ab testing`
* 	2. The page has special event that is adding to the backdrop the modal id for design reasons and when we tried to use
* 	   `bootbox.dialog` the event was not running and as a result we had a bug that the addItem.php didn't have backdrop
*/
that.$upgradePackage.find('.body-content').html(that.$message);
showFetureTab(getFirstFeatureID());
that.$tabs.on('click.open_tab', function() {
if ( $(this).hasClass('active') ) return false;
showFetureTab($(this).data('id'));
});
/**
* When hiding the popup make sure that the first tab will always be active
* because in case of features that are not using yet the new upgrade features manager
* will see the first tab
*/
that.$upgradePackage.on('hidden.bs.modal.show_first_tab', function() {
showFetureTab(getFirstFeatureID());
});
};
/**
* The method is showing the upgrade content of the feature
*
* @param {string} fetureID - The feature id that we want to show the user
*/
that.show = function( fetureID ) {
showFetureTab(fetureID);
that.$upgradePackage.modal('show');
};
/**
* The function is returning the first feature id by comparing the places
*/
function getFirstFeatureID() {
var place = false;
var featureID = '';
$.each(that.proFeatures, function( key, feature ) {
var fp = parseInt(feature.place);
if ( $.isNumeric(place) ) {
if ( fp < place ) {
featureID = key;
place = fp;
}
} else {
featureID = key;
place = fp;
}
});
return featureID;
}
/**
* The function is generating the upgrade modal message html
*/
function generateMessageHtml() {
var html = '';
html += '<div class="w-u-h-c">';
html += '<div class="side-menu-container hidden-xs">';
html += '<ul class="side-menu list-group">';
$.each(that.proFeatures, function( featureID, feature ) {
html += '<li class="list-group-item" data-id="'+featureID+'" style="order:'+feature.place+';">';
html += '<i class="'+feature.sideMenu.icon+'"></i>';
html += '<span>'+feature.sideMenu.title+'</span>';
html += '</li>';
});
html += '</ul>';
html += '</div>';
html += '<div class="content"></div>';
html += '</div>';
return html;
}
/**
* The function is showing the feature tab and its contents
*
* @pararm {string} fetureID - The feature id we want to show the user
*/
function showFetureTab( fetureID ) {
if ( !that.$tabs ) return;
setUpgradeReason(fetureID);
if ( !that.proFeatures[fetureID] ) fetureID = getFirstFeatureID();
that.$tabs.removeClass('active');
that.$tabs.filter('[data-id="'+fetureID+'"]').addClass('active');
var $html = $(generateFeatureContentHtml(fetureID));
ProFeature_addLabel({
'websiteID': that.websiteID,
'packageNUM': that.packageNUM,
'limitedToPackageNUM' : that.proFeatures[fetureID].limitedToPackageNUM,
'toolType': 'setUniqueDomain',
'$element': $html.find('.title-container .title'),
'text': that.proFeatures[fetureID].packageName + ' +'
});
that.$content.fadeOut(200,function() {
that.$content.html($html);
that.$content.fadeIn(200);
that.$upgradePackage.find('.modal-body').stop().animate({scrollTop: 0});
});
}
/**
* The function is setting the upgrade reason of the active feature tab using regex
*
* Regex Example: https://stackoverflow.com/a/14679166
*
* @prarm {string} fetureID - Selected feature id
*/
function setUpgradeReason( fetureID ) {
if ( !fetureID || fetureID.length === 0 ) return;
var href = that.$upgradePackage.find('#upgradeBtn').attr('href');
if ( !that.page ) that.page = '';
if ( href.indexOf('ur=') != -1 ) {
href = href.replace(/ur=[^&?]*/,'ur=' + (that.page.length > 0 ? that.page + '_' + fetureID : fetureID));
} else {
href += '&ur=' + (that.page.length > 0 ? that.page + '_' + fetureID : fetureID);
}
that.$upgradePackage.find('#upgradeBtn').attr('href',href);
}
/**
* The function is generating the feature content html
*
* @pararm {string} fetureID - The feature id we want to show the user
*/
function generateFeatureContentHtml( fetureID ) {
var html = '';
html += '<div class="content-top">';
html += '<div class="logo-container">';
if ( that.proFeatures[fetureID].content.logo.length > 0 ) {
html += '<img class="logo" src="'+that.proFeatures[fetureID].content.logo+'">';
}
html += '</div>';
html += '<div class="title-container">';
html += '<h3 class="title">'+that.proFeatures[fetureID].content.title+'</h3>';
html += '<p class="sub-title">'+that.proFeatures[fetureID].content.subTitle+'</p>';
html += '</div>';
html += '</div>';
html += '<div class="content-middle">';
html += '<ul class="list-unstyled">';
$.each(that.proFeatures[fetureID].content.explanation.bullets, function( index, value ) {
html += '<li><i class="ace-icon fa fa-check blue"></i> ' + value + '</li>';
});
html += '</ul>';
if ( that.proFeatures[fetureID].content.explanation.mediaType == 'image' && that.proFeatures[fetureID].content.explanation.image!='' ) {
html += '<img src="'+that.proFeatures[fetureID].content.explanation.image+'"/>';
}
if ( that.proFeatures[fetureID].content.explanation.mediaType == 'video' && that.proFeatures[fetureID].content.explanation.video.src!='' ) {
html += '<video controls="" poster="'+that.proFeatures[fetureID].content.explanation.video.poster+'"><source src="'+that.proFeatures[fetureID].content.explanation.video.src+'" type="video/mp4"></video>';
}
html += '</div>';
return html;
}
return that;
}();
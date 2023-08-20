/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_formularioModal_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/formularioModal/index */ \"./src/components/formularioModal/index.ts\");\n/* harmony import */ var _components_formularioPrincipal_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formularioPrincipal/index */ \"./src/components/formularioPrincipal/index.ts\");\n\n\nconst iniciaFormularioPrincipal = (0,_components_formularioPrincipal_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst iniciaFormularioModal = (0,_components_formularioModal_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\niniciaFormularioPrincipal();\niniciaFormularioModal();\nconsole.log(\"oi?\");\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/components/formularioModal/index.ts":
/*!*************************************************!*\
  !*** ./src/components/formularioModal/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formularioModal)\n/* harmony export */ });\n/* harmony import */ var _controllers_listagemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/listagemController */ \"./src/controllers/listagemController.ts\");\n\nconst listagem = new _controllers_listagemController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nfunction formularioModal() {\n    return () => {\n        // Adiciona um escutatador de eventos no modal para os botões de deletar e editar\n        $(\"#lista-modal\").on(\"click\", \".botao-remover\", function () {\n            const liElement = $(this).closest(\"li\");\n            const idRemover = liElement.attr(\"id\");\n            if (idRemover) {\n                listagem.removerJogoDaLista(idRemover);\n            }\n        });\n        $(\"#lista-modal\").on(\"click\", \".botao-editar\", function () {\n            const botaoID = $(this).attr(\"id\");\n            const liElement = $(this).closest(\"li\").attr(\"id\");\n            if (liElement && botaoID) {\n                listagem.ativarEdicao(liElement, botaoID);\n            }\n        });\n        // Botão aumentar e diminuir posição da fila no modal\n        $(\"#lista-modal\").on(\"click\", \"#botao-diminuir\", function () {\n            var _a;\n            const inputNumber = $(this).next();\n            const inputNumberModal = (_a = inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.val()) === null || _a === void 0 ? void 0 : _a.toString();\n            if (inputNumberModal) {\n                if (parseInt(inputNumberModal) < 2) {\n                    return;\n                }\n                else {\n                    inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.val(parseInt(inputNumberModal) - 1);\n                }\n            }\n            else {\n                inputNumber.val(1);\n            }\n        });\n        $(\"#lista-modal\").on(\"click\", \"#botao-aumentar\", function () {\n            var _a;\n            const inputNumber = $(this).prev();\n            const inputNumberModal = (_a = inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.val()) === null || _a === void 0 ? void 0 : _a.toString();\n            if (inputNumberModal) {\n                inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.val(parseInt(inputNumberModal) + 1);\n            }\n            else {\n                inputNumber.val(1);\n            }\n        });\n        // Retorna os itens da lista do modal para o modo leitura quando o modal for fechado\n        $('#listaModal').on('hidden.bs.modal', function () {\n            listagem.carregarLista();\n            $(\"#botao-salvar\").addClass(\"d-none\");\n        });\n        // Pegar dados do Modal para edição da lista\n        $(\"#form-editar-jogo\").off(\"submit\").on(\"submit\", function (e) {\n            e.preventDefault();\n            let jogos = [];\n            let listaDadoForm = [];\n            const dadosCapturados = $(this).serializeArray();\n            let ids = [];\n            $(\"#lista-modal li\").each(function () {\n                if ($(this).hasClass(\"li-editavel\")) {\n                    ids.push(this.id);\n                }\n            });\n            for (let i = 0; i < dadosCapturados.length; i += 4) {\n                listaDadoForm.push(dadosCapturados.slice(i, i + 4));\n            }\n            listaDadoForm = listaDadoForm.map(lista => {\n                return lista.map(({ value }) => {\n                    return value;\n                });\n            });\n            listaDadoForm.forEach(((listaValores, i) => {\n                const jogo = {\n                    nome: listaValores[0],\n                    categoria: listaValores[1],\n                    plataforma: listaValores[2],\n                    prioridade: listaValores[3],\n                    id: ids[i]\n                };\n                jogos.push(jogo);\n            }));\n            listagem.editarDados(jogos);\n        });\n    };\n}\n\n\n//# sourceURL=webpack:///./src/components/formularioModal/index.ts?");

/***/ }),

/***/ "./src/components/formularioPrincipal/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/formularioPrincipal/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formularioPrincipal)\n/* harmony export */ });\n/* harmony import */ var _controllers_listagemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/listagemController */ \"./src/controllers/listagemController.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _inputRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputRange */ \"./src/components/formularioPrincipal/inputRange.ts\");\n\n\nconst listagem = new _controllers_listagemController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Coleta as informações enviadas no formulario para serem tratadas \nfunction formularioPrincipal() {\n    return () => {\n        $(\"#form-adicionar-jogo\").on(\"submit\", function (e) {\n            var _a, _b, _c, _d;\n            e.preventDefault();\n            const jogo = {\n                nome: \"\",\n                categoria: \"\",\n                plataforma: \"\",\n                prioridade: \"\",\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n            };\n            const nome = (_a = $(\"#nome\").val()) === null || _a === void 0 ? void 0 : _a.toString().trim();\n            const categoria = (_b = $(\"#categorias\").val()) === null || _b === void 0 ? void 0 : _b.toString();\n            const plataforma = (_c = $(\"#plataformas\").val()) === null || _c === void 0 ? void 0 : _c.toString();\n            const prioridade = (_d = $(\"#prioridade\").val()) === null || _d === void 0 ? void 0 : _d.toString();\n            if (nome && categoria && plataforma && prioridade) {\n                jogo.nome = nome;\n                jogo.categoria = categoria;\n                jogo.plataforma = plataforma;\n                jogo.prioridade = prioridade;\n            }\n            else {\n                return alert(\"informações insuficientes\");\n            }\n            listagem.submeterDados(jogo);\n        });\n        const iniciaInputRange = (0,_inputRange__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        iniciaInputRange();\n    };\n}\n\n\n//# sourceURL=webpack:///./src/components/formularioPrincipal/index.ts?");

/***/ }),

/***/ "./src/components/formularioPrincipal/inputRange.ts":
/*!**********************************************************!*\
  !*** ./src/components/formularioPrincipal/inputRange.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputRange)\n/* harmony export */ });\n/* harmony import */ var _controllers_inputRangeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controllers/inputRangeController */ \"./src/controllers/inputRangeController.ts\");\n// Controla o valor na caixa acima do input range\n\nconst inputRangeService = new _controllers_inputRangeController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nfunction inputRange() {\n    return () => {\n        $(\".input-range\").on(\"input\", function () {\n            let novoValor = $(this).val() + '';\n            inputRangeService.atualizaValor(novoValor);\n        });\n    };\n}\n\n\n//# sourceURL=webpack:///./src/components/formularioPrincipal/inputRange.ts?");

/***/ }),

/***/ "./src/controllers/comunicaAPIController.ts":
/*!**************************************************!*\
  !*** ./src/controllers/comunicaAPIController.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ comunicaAPIController)\n/* harmony export */ });\nclass comunicaAPIController {\n    pegaLista() {\n        return $.get('http://localhost:3000/jogos');\n    }\n    adicionaJogo(jogo) {\n        $.ajax({\n            type: 'POST',\n            url: 'http://localhost:3000/jogos',\n            data: JSON.stringify(jogo),\n            contentType: 'application/json',\n            success: function (response) {\n                console.log('Solicitação POST bem-sucedida', response);\n            },\n            error: function (error) {\n                console.error('Erro na solicitação POST', error);\n            }\n        });\n    }\n    atulizaJogo(jogo) {\n        $.ajax({\n            type: 'PUT',\n            url: 'http://localhost:3000/jogos/' + jogo.id,\n            data: JSON.stringify(jogo),\n            contentType: 'application/json',\n            success: function (response) {\n                console.log('Solicitação PUT bem-sucedida', response);\n            },\n            error: function (error) {\n                console.error('Erro na solicitação PUT', error);\n            }\n        });\n    }\n    deletaJogo(id) {\n        $.ajax({\n            type: 'DELETE',\n            url: 'http://localhost:3000/jogos/' + id,\n            success: function (response) {\n                console.log('Solicitação DELETE bem-sucedida', response);\n            },\n            error: function (error) {\n                console.error('Erro na solicitação DELETE', error);\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/controllers/comunicaAPIController.ts?");

/***/ }),

/***/ "./src/controllers/inputRangeController.ts":
/*!*************************************************!*\
  !*** ./src/controllers/inputRangeController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputRangeController)\n/* harmony export */ });\nclass inputRangeController {\n    atualizaValor(valorDoInput) {\n        $(\"#range-value\").text(valorDoInput);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/controllers/inputRangeController.ts?");

/***/ }),

/***/ "./src/controllers/listagemController.ts":
/*!***********************************************!*\
  !*** ./src/controllers/listagemController.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listagemController)\n/* harmony export */ });\n/* harmony import */ var _comunicaAPIController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunicaAPIController */ \"./src/controllers/comunicaAPIController.ts\");\n\nclass listagemController {\n    constructor() {\n        this.jogoServive = new _comunicaAPIController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.listaDeJogos = [];\n        this.pegaListaService();\n    }\n    submeterDados(jogo) {\n        if (!this.validaDados(jogo)) {\n            return;\n        }\n        this.listaDeJogos.push(jogo);\n        this.jogoServive.adicionaJogo(jogo);\n        this.adicionaJogoNaLista();\n    }\n    removerJogoDaLista(id) {\n        $(\"#\" + id).fadeOut();\n        setTimeout(() => $(\"#\" + id).remove(), 400);\n        this.listaDeJogos = this.listaDeJogos.filter(item => item.id != id);\n        if (this.listaDeJogos.length < 1) {\n            $(\"#mostrar-lista-btn\").addClass(\"d-none\");\n            $('#listaModal').modal('hide');\n        }\n        $(\"#itens-adicionados\").text(this.listaDeJogos.length);\n        this.jogoServive.deletaJogo(id);\n    }\n    ativarEdicao(idLI, idDoBotao) {\n        this.alterarTagParaInput(idLI, idDoBotao);\n        $(\"#botao-salvar\").removeClass(\"d-none\");\n    }\n    editarDados(jogo) {\n        if (!this.validaDados(jogo)) {\n            return;\n        }\n        if (jogo instanceof Array) {\n            jogo.forEach(jogo => {\n                this.listaDeJogos = this.listaDeJogos.map(item => {\n                    if (item.id === jogo.id) {\n                        return jogo;\n                    }\n                    return item;\n                });\n                this.jogoServive.atulizaJogo(jogo);\n            });\n            this.carregarLista();\n        }\n    }\n    carregarLista() {\n        let liTAGs = \"\";\n        this.listaDeJogos.forEach(jogo => {\n            liTAGs = liTAGs + this.liNaoEhEditavel(jogo);\n        });\n        $(\"#lista-modal\").html(liTAGs);\n    }\n    validaDados(jogo) {\n        if (this.jogoDuplicado(jogo)) {\n            alert(\"Esse jogo ja foi adicionado.\");\n            return false;\n        }\n        if (this.jogoNaMesmaPosicao(jogo)) {\n            alert(\"Essa posição ja esta em uso.\");\n            return false;\n        }\n        return true;\n    }\n    alterarTagParaInput(idLI, idDoBotao) {\n        const reverterTags = $(\"#\" + idDoBotao).hasClass(\"editar--pressionado\");\n        const elementoOriginal = $(\"#\" + idLI);\n        const jogoSelecionado = this.listaDeJogos.find(jogo => jogo.id === idLI);\n        if (jogoSelecionado) {\n            if (reverterTags) {\n                const liReadOnly = this.liNaoEhEditavel(jogoSelecionado);\n                const novoElemento = $(liReadOnly);\n                elementoOriginal.replaceWith(novoElemento);\n            }\n            else {\n                const liParaEdicao = this.liEhEditavel(jogoSelecionado);\n                const novoElemento = $(liParaEdicao);\n                elementoOriginal.replaceWith(novoElemento);\n            }\n        }\n    }\n    adicionaJogoNaLista() {\n        $(\"#mostrar-lista-btn\").removeClass(\"d-none\");\n        $(\"#itens-adicionados\").text(this.listaDeJogos.length);\n        this.carregarLista();\n        this.apagarFormulario();\n    }\n    apagarFormulario() {\n        $(\"#nome\").val('');\n        $(\"#categorias\").val('');\n        $(\"#plataformas\").val('');\n        $(\"#range-value\").text('1');\n        $(\"#prioridade\").val('1');\n    }\n    jogoDuplicado(jogoEnviado) {\n        if (jogoEnviado instanceof Array) {\n            let repetiu = false;\n            jogoEnviado.forEach(jogoAhVerificar => {\n                this.listaDeJogos.forEach((jogoGuardado, indexJogoGuardado) => {\n                    var _a;\n                    if (jogoGuardado.id === jogoAhVerificar.id) {\n                        return repetiu;\n                    }\n                    if (((_a = jogoEnviado[indexJogoGuardado]) === null || _a === void 0 ? void 0 : _a.id) === jogoGuardado.id) {\n                        return repetiu = jogoEnviado[indexJogoGuardado].nome === jogoAhVerificar.nome;\n                    }\n                    return repetiu = jogoGuardado.nome === jogoAhVerificar.nome;\n                });\n            });\n            return repetiu;\n        }\n        else {\n            return this.listaDeJogos.some(jogo => {\n                if (jogo.id === jogoEnviado.id) {\n                    return false;\n                }\n                return jogo.nome === jogoEnviado.nome;\n            });\n        }\n    }\n    jogoNaMesmaPosicao(jogoEnviado) {\n        if (jogoEnviado instanceof Array) {\n            let repetiu = false;\n            jogoEnviado.forEach(jogoAhVerificar => {\n                this.listaDeJogos.forEach((jogoGuardado, indexJogoGuardado) => {\n                    var _a;\n                    if (jogoGuardado.id === jogoAhVerificar.id) {\n                        return repetiu;\n                    }\n                    if (((_a = jogoEnviado[indexJogoGuardado]) === null || _a === void 0 ? void 0 : _a.id) === jogoGuardado.id) {\n                        return repetiu = jogoEnviado[indexJogoGuardado].prioridade === jogoAhVerificar.prioridade;\n                    }\n                    return repetiu = jogoGuardado.prioridade === jogoAhVerificar.prioridade;\n                });\n            });\n            return repetiu;\n        }\n        else {\n            return this.listaDeJogos.some(jogo => {\n                if (jogo.id === jogoEnviado.id) {\n                    return false;\n                }\n                return jogo.prioridade === jogoEnviado.prioridade;\n            });\n        }\n    }\n    liNaoEhEditavel(jogo) {\n        const nomeSemEspaco = jogo.nome.replace(/\\s+/g, \"\").trim();\n        const idRemover = nomeSemEspaco + \"-remover\";\n        const idEditar = nomeSemEspaco + \"-editar\";\n        return `\r\n        <li class=\"border-bottom border-dark mb-2\" id=\"${jogo.id}\">\r\n            <div class=\"d-flex align-items-center gap-3\">\r\n                <h3 id=\"titulo-${nomeSemEspaco}\" class=\"fs-3 titulo-jogo-modal border-0\">${jogo.nome} \r\n                </h3>\r\n                <div class=\"fs-6 d-flex align-items-center gap-2 ms-auto\">\r\n                    <button class=\"botao-editar bg-roxo\" id=\"${idEditar}\" title=\"editar\" type=\"button\"><i class=\"bi bi-pencil\"></i></button>\r\n                    <button class=\"botao-remover bg-roxo\" id=\"${idRemover}\" title=\"remover\" type=\"button\"><i class=\"bi bi-trash\"></i></button>\r\n                </div>\r\n            </div> \r\n            <p class=\"fs-5 border-0\" class=\"item-categoria\" id=\"categoria-${nomeSemEspaco}\">${jogo.categoria}</p>\r\n            <p class=\"fs-5 border-0\" class=\"item-plataforma\" id=\"plataforma-${nomeSemEspaco}\">${jogo.plataforma}</p>\r\n            <p class=\"fs-5 border-0\" class=\"item-prioridade\" id=\"prioriade-${nomeSemEspaco}\">Posição na fila: ${jogo.prioridade}</p>\r\n        </li>\r\n    `;\n    }\n    liEhEditavel(jogo) {\n        return `\r\n        <li class=\"d-flex flex-column gap-2 border-bottom border-dark mb-2 li-editavel\" id=\"${jogo.id}\">\r\n                <div class=\"d-flex align-items-center gap-3\">\r\n                    <input value=\"${jogo === null || jogo === void 0 ? void 0 : jogo.nome}\" name=\"nomeDoJogo\" class=\"fs-3 titulo-jogo-modal titulo-input-modal border-0 rounded bg-roxo\" required>\r\n                    <div class=\"fs-6 d-flex align-items-center gap-2 ms-auto\">\r\n                        <button class=\"botao-editar bg-roxo editar--pressionado\" id=\"botao-editar\" title=\"editar\" type=\"button\"><i class=\"bi bi-pencil\"></i></button>\r\n                        <button class=\"botao-remover bg-roxo\" id=\"botao-remover\" title=\"remover\" type=\"button\"><i class=\"bi bi-trash\"></i></button>\r\n                    </div>\r\n                </div> \r\n                <select required class=\"form-select categoria-input-modal border-0 bg-roxo\" id=\"categorias-modal\" name=\"categoria\" aria-label=\"categorias\" >\r\n                    <option value=\"\">Escolha uma categoria</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"Ação / Combate\" ? \"selected\" : \"\"} value=\"Ação / Combate\">Ação / Combate</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"Imersivo\" ? \"selected\" : \"\"} value=\"Imersivo\">Imersivo</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"jogo online\" ? \"selected\" : \"\"} value=\"jogo online\">jogo online</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"Horror / Survival\" ? \"selected\" : \"\"} value=\"Horror / Survival\">Horror / Survival</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"Estratégia\" ? \"selected\" : \"\"} value=\"Estratégia\">Estratégia</option>\r\n                    <option ${(jogo === null || jogo === void 0 ? void 0 : jogo.categoria) === \"Esportes\" ? \"selected\" : \"\"} value=\"Esportes\">Esportes</option>\r\n                </select>\r\n                <select required class=\"form-select border-0 bg-roxo plataforma-input-modal\" id=\"plataformas-modal\" name=\"plataformas\" aria-label=\"plataformas\">\r\n                    <option value=\"\">Escolha a plataforma desse jogo</option>\r\n                    <option value=\"PC\" ${(jogo === null || jogo === void 0 ? void 0 : jogo.plataforma) === \"PC\" ? \"selected\" : \"\"}>PC</option>\r\n                    <option value=\"Xbox\" ${(jogo === null || jogo === void 0 ? void 0 : jogo.plataforma) === \"Xbox\" ? \"selected\" : \"\"}>Xbox</option>\r\n                    <option value=\"PS\" ${(jogo === null || jogo === void 0 ? void 0 : jogo.plataforma) === \"PS\" ? \"selected\" : \"\"}>PS</option>\r\n                    <option value=\"Nintendo\" ${(jogo === null || jogo === void 0 ? void 0 : jogo.plataforma) === \"Nintendo\" ? \"selected\" : \"\"}>Nintendo</option>\r\n                </select>\r\n                <div class=\"d-flex gap-3\">\r\n                    <p class=\"fs-5 border-0\" class=\"item-prioridade\" id=\"prioriade-\">Posição na fila: </p>\r\n                    <div><button class=\"bg-roxo\" type=\"button\" title=\"-\" id=\"botao-diminuir\"><i class=\"bi bi-dash-circle\"></i></button><input value=\"${jogo === null || jogo === void 0 ? void 0 : jogo.prioridade}\" id=\"input-number-modal\" name=\"prioridade\" type=\"number\" class=\"bg-roxo prioridade-input-modal\" title=\"digite o numero\" style=\"width: 35px;\"><button type=\"button\" class=\"bg-roxo\" title=\"+\" id=\"botao-aumentar\"><i class=\"bi bi-plus-circle\"></i></button></div>\r\n                </div>\r\n            </li>\r\n        `;\n    }\n    pegaListaService() {\n        this.jogoServive.pegaLista()\n            .then((listaDeJogos) => {\n            listaDeJogos.forEach((jogo) => {\n                this.submeterDados(jogo);\n            });\n        })\n            .catch(function (error) {\n            console.error('Erro ao obter lista de jogos', error);\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/controllers/listagemController.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
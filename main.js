var $k52p8$reactjsxruntime = require("react/jsx-runtime");
var $k52p8$reactdomclient = require("react-dom/client");
var $k52p8$react = require("react");




function $9d901da68826f8cd$export$86fbec116b87613f() {
    return /*#__PURE__*/ (0, $k52p8$reactjsxruntime.jsx)("h1", {
        children: "Hello world!"
    });
}




const $e92da7ff35fa89fa$export$38ee920e59704589 = /*#__PURE__*/ (0, $k52p8$react.createContext)();
function $e92da7ff35fa89fa$export$88f24fd8fcfab6ca({ children: children }) {
    // state
    const [loading, setLoading] = (0, $k52p8$react.useState)(false);
    const [filter, setFilter] = (0, $k52p8$react.useState)();
    // happens on load
    (0, $k52p8$react.useEffect)(()=>{}, []); // use brackets to establish additional triggers
    return /*#__PURE__*/ (0, $k52p8$reactjsxruntime.jsx)($e92da7ff35fa89fa$export$38ee920e59704589.Provider, {
        value: {
            loading: loading,
            setLoading: setLoading,
            filter: filter,
            setFilter: setFilter
        },
        children: children
    });
}
const $e92da7ff35fa89fa$export$1c72fe480f599e97 = ()=>{
    const { loading: loading, setLoading: setLoading } = (0, $k52p8$react.useContext)($e92da7ff35fa89fa$export$38ee920e59704589);
    return {
        loading: loading,
        setLoading: setLoading
    };
};
const $e92da7ff35fa89fa$export$3274cf84b703fff = ()=>{
    const { filter: filter, setFilter: setFilter } = (0, $k52p8$react.useContext)($e92da7ff35fa89fa$export$38ee920e59704589);
    return {
        filter: filter,
        setFilter: setFilter
    };
};
const $e92da7ff35fa89fa$export$38eaa17faae8f579 = ()=>{
    const { menu: menu, setMenu: setMenu } = (0, $k52p8$react.useContext)($e92da7ff35fa89fa$export$38ee920e59704589);
    return {
        menu: menu,
        setMenu: setMenu
    };
};


const $6be4b30feeb09703$var$container = document.getElementById("app");
const $6be4b30feeb09703$var$root = (0, $k52p8$reactdomclient.createRoot)($6be4b30feeb09703$var$container);
$6be4b30feeb09703$var$root.render(/*#__PURE__*/ (0, $k52p8$reactjsxruntime.jsx)((0, $e92da7ff35fa89fa$export$88f24fd8fcfab6ca), {
    children: /*#__PURE__*/ (0, $k52p8$reactjsxruntime.jsx)((0, $9d901da68826f8cd$export$86fbec116b87613f), {})
}));


//# sourceMappingURL=main.js.map

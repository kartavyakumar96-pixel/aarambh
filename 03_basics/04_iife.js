// IMMEDIATELY INVOKED FUNCTION EXECUTION

(function chai(){
    console.log("DBMS_Connected")
})();

((name) => {
    console.log(`DBMS_connected Two ${name}`)
})( 'Hitesh')
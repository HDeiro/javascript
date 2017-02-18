class MyClass {
    constructor() {
    }

    //Forma 1
    static static_method_1() {
        console.log('Hey, você chamou o primeiro método estático');
    }
}

//Forma 2
MyClass.static_method_2 = () => {
    console.log('Hey, você chamou o segundo método estático');
}

MyClass.static_method_1();
MyClass.static_method_2();
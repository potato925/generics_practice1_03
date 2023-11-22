function practice<T>(practice1:T):T {
    return practice1;
}

let result = practice<number>(1234);
console.log(result);
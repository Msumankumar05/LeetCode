var groupAnagrams = function(strs) {

    const map= {};

    for(const nstr of strs){

        const Sortstr = nstr.split("").sort().join("");

        if(!map[Sortstr]){
            map[Sortstr] = [];
        }

        map[Sortstr].push(nstr);
    }    

    return Object.values(map);
}
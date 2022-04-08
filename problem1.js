function check_anagram(s1, s2) {

    if(s1.length != s2.length) {
        return false
    }
    
    let sorted_s1 = s1.toLowerCase().split('').sort().join('')
    let sorted_s2 = s2.toLowerCase().split('').sort().join('')

    if(sorted_s1 === sorted_s2){
        return true
    } else {
        return false
    }
}

module.exports = { check_anagram }
export function findCommonSubstring(string1: string, string2: string): string {
    const str1 = [...string1];
    const str2 = [...string2];
    let commonSubstring = "";

    for (let i = 0; i <= string1.length - 1; i++) {
        if (str1[i] === str2[i]) {
            commonSubstring = commonSubstring + str1[i];
        } else {
            return commonSubstring;
        }
    }

    return commonSubstring;
}
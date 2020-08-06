// Write a method that takes a string argument and returns whether or not characters in the string have matching brackets. Meaning for every { there is a corresponding } bracket. Return true if they do, return false if they do not. Please unit test with the following use cases (and any others you choose to ensure functionality):

// Test string - Expected result

// {} - True

// }{ - False (closed bracket can't proceed all open brackets.)

// {{} - False (one bracket pair was not closed)

// "" - True. (no brackets in the string will return True)

function checkForBrackets(string) {
    let leadBracketLocation = [];
    let closeBracketLocation = [];

    for (let i = 0; i < string.length; i++) {
        if(string[i] == "{") {
            leadBracketLocation.push(i);
        }
        if(string[i] == "}") {
            closeBracketLocation.push(i);
        }
    }
    if(leadBracketLocation.length == 0 && closeBracketLocation.length == 0) {
        return true;
    }
    if(leadBracketLocation.length == closeBracketLocation.length) {
        for (let j = 0; j < leadBracketLocation.length; j++) {
            if(leadBracketLocation[j] > closeBracketLocation[j]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

checkForBrackets("This is{ a string } with { both }{ and }.") //will return True

checkForBrackets("This is{ a string } with { both }} and .{") //will return False

checkForBrackets("This is{ a string } with { both }{ and .") //will return False

checkForBrackets("") //will return True


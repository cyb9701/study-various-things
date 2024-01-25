/**
 * Template Literal Type
 */
type CodeFacotry = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFacotry>; // "CODE FACTORY"

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>; // "code factory"

// Capitalize
type CodeFacotryCapital = Capitalize<CodeFactoryLower>; // "Code factory"

// Uncapitalize
type CodeFacotryUnCapital = Uncapitalize<CodeFacotryCapital>; // "code factory"

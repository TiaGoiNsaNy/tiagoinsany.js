module.exports = {
    null: {
        Options: `Você precisa definir as Opções da função!`
    },
    typeof: {
        Number: (Param) => `O Parâmetro "${Param}" não é do tipo Number!`,
        String: (Param) => `O Parâmetro "${Param}" não é do tipo String!`,
        Object: (Param) => `O Parâmetro "${Param}" não é do tipo Object!`,
        Boolean: (Param) => `O Parâmetro "${Param}" não é do tipo Boolean!`
    },
    array: {
        NotIncluides: (Array) => `Os Valores '${Array}' não estão Disponíveis!`
    }
};
const graphql = require('graphql')
const usuarios = require('./usuarios.json')

let experienciaType = new graphql.GraphQLObjectType({
	name:'Experiencia',
	fields: {
		linguagem: { type: graphql.GraphQLString },
		frameworks: { type: new graphql.GraphQLList(graphql.GraphQLString ) }
	}
})

let usuarioType = new graphql.GraphQLObjectType({
  	name: 'Usuario',
	fields: {
		id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
		nome: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
		idade: { type: graphql.GraphQLInt },
		cidade: { type: graphql.GraphQLString },
		experiencia: { type: new graphql.GraphQLList(experienciaType) }
	}
})

let schema = new graphql.GraphQLSchema({
	query: new graphql.GraphQLObjectType({
	    	name: 'Query',
	    	fields: {
			usuario: {
				type: usuarioType,
				args: {
					id:{
						type: graphql.GraphQLInt
					  }
				},
				resolve: function (_ , args) {
					let response = usuarios.find(function (usuario){
						return (usuario.id === args.id)
					})
					return response
				}
			},
			usuarios: {
				type: new graphql.GraphQLList(usuarioType),
				resolve: function (_ , args) {
				  return usuarios
				}
			  }
		}
	})
})

module.exports = schema
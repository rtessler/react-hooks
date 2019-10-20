export const surveyReducer = (state, action) => {

    switch (action.type) {

        case 'UPDATE_USER': 
            return [...state, {id: uniqid(), 
                title: action.book.title,
                author: action.book.author}]

        case 'UPDATE_FAVORITES':
            return state.filter(book => book.id !== action.id)

        default:
            return state
            
    }
}
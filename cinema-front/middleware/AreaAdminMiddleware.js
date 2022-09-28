export default ({ store, redirect }) => {

    if (localStorage.getItem('type_user') == 0) {
        redirect('/');
    }

}
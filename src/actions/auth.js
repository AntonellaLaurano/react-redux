import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/config-firebase";

export const googleLogin = () => {
    return (dispatch) => {  // Este dispacth es permitido por thunk
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            }) // Ventana emergente para login
    }
}

export const emailAndPasswordLogin = (email, password) => {
    return (dispacth) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispacth(login(user.uid, user.displayName))
            });
    }
}

export const register = (email, password, username) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then( async ({ user }) => {
                await user.updateProfile({ displayName: username })
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        },
    };
}

export const logout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch({
            type: types.logout,
        });
    }
}
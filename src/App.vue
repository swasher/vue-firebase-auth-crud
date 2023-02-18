<template>
    <article>
        <h4>Get data from firestore</h4>

        <button type="button" class="btn btn-primary" @click="getMovies">Get Data</button>

        <table>
            <tr v-for="(movie, key) in movies">
                <td>{{ movie.title }}</td>
                <td>{{ movie.year }}</td>
            </tr>
        </table>
    </article>

    <article>
        <h4>Create an Account</h4>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Submit</button></p>
    </article>

</template>


<script setup>
import {ref, onMounted} from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {connection} from './firebase.js'

const db = getFirestore(connection);
console.log('db=', db);

const movies = ref([])

onMounted(() => {
    console.log('myheader mounted');
})


async function getMovies() {
    const moviesCol = collection(db, 'movie');
    const moviesSnapshot = await getDocs(moviesCol);
    movies.value = moviesSnapshot.docs.map(doc => doc.data());
}


const email = ref('')
const password = ref('')
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Successfully registered!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message, ' ### Error code:', error.code, )
        });
}

</script>

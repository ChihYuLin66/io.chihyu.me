<script>
import { ref } from 'vue';
export default {
    setup () {
        const passwordResult = ref('');
        const passwordLength = ref(12);

        const hasUpperCase = ref(true);
        const hasLowercase = ref(true);
        const hasNumber = ref(true);
        const hasSymbol = ref(true);

        let getCharacters = () => {
            let characters = '';
            if (hasUpperCase.value) {
                characters += 'ABCDEFGHIGJKMMOPQRSTUVWXYZ';
            }
            if (hasLowercase.value) {
                characters += 'abcdefghijklmnopqrstuvwxyz';
            }
            if (hasNumber) {
                characters += '0123456789';
            }
            if (hasSymbol) {
                characters += '~!@#$%^&*()_+{}=-[];/.,';
            }
            
            return characters;
        }

        let generateCharacters = (length) => {
            let characters = getCharacters();
            let charactersLength = characters.length;
            let counter = 0;
            let result = '';
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }

            return result;
        }
       
        function setPassword (length) {
            passwordResult.value = generateCharacters(length)
        }

        return {
            setPassword,
            passwordLength,
            passwordResult
        }
    }

}
</script>

<template>
    <div>
        <button @click="setPassword(passwordLength)">gen</button>

        <h1>{{ passwordResult }}</h1>
        
    </div>
</template>

<style  scoped>

</style>
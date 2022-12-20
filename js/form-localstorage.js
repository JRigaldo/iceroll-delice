jQuery(function ($) {
    $(document).ready(function () {
        /**
         * CHECK WITCH STEP IS TRIGGERED IN CONTAINER-MODAL CLASS
         * IDEA IS TO PUT IT IN LOCAL STORAGE AND REATTRIBUTE IT IN REFRESH
         */
        /**
        function testLocalStorage(){
            var classList = $('.container-modal').attr('class');
            var classes = classList.split(/[\s]/)
            for(i = 0; i < classes.length; i++){
                console.log(classes[i])
            }
        }
         */

        /**
         * KEEP VALUES'S FORM FIELDS
         */
        /**
        var formData = {
            set: function () {
                var formData = []; // Here we are defining the array of elements
                localStorage.removeItem('formData ');
                $('form input[type=text]').each(function () {
                    //loop through form input fields
                    formData.push({name: this.name, value: this.value});
                });
                //here we are converting whole array to json
                localStorage.formData = JSON.stringify(formData);
            },

            get: function () {
                if (localStorage.formData != undefined) {
                    formData = JSON.parse(localStorage.formData);
                    for (var i = 0; i < formData.length; i++) {
                        $('[name=' + formData[i].name + ']').val(formData[i].value);
                    }
                }
            }
        }
        formData.get(); // method to call form data from FORM, when page loaded
        $("input").change(function () {
            formData.set(); // method to set input data on change
        });

         */
    });
});


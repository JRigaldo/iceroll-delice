jQuery(function ($) {
    $(document).ready(function () {
        function responsive() {
            $("#header-icon-links").click(function (e) {
                e.preventDefault()
                $("body").addClass("with-sidebar-links")
            })
            $("#exit-menu-links").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-links")
            })

            $("#site-cover").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-links")
            })
        }
        responsive()
    })
})

jQuery(function ($) {
    $(document).ready(function () {
        function responsive() {
            $("#header-icon-social").click(function (e) {
                e.preventDefault()
                $("body").addClass("with-sidebar-social")
                if ($("body").has('with-sidebar-links')) {
                    $("body").removeClass("with-sidebar-links")
                }
            })
            $("#exit-menu-social").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-social")
            })
            $("#header-icon-links").click(function (e) {
                e.preventDefault()
                $("body").addClass("with-sidebar-links")
                if ($("body").has('with-sidebar-social')) {
                    $("body").removeClass("with-sidebar-social")
                }
            })
            $("#exit-menu-links").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-links")
            })

            $("#site-cover").click(function (e) {
                e.preventDefault()
                $("body").removeClass("with-sidebar-social with-sidebar-links")
            })
        }
        responsive()
    })
})

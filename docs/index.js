(($) => {

    $(document).ready(() => {
        $('select').select2({tags: true, createTag: (params) => { return undefined }})
        
        $.each(items, (idx, item) => {
            $("#item").append($(`<option value="${item.c}">${item.l}</option>`))
        })
        $.each(qualities, (idx, quality) => {
            $("#quality").append($(`<option value="${quality.v}">${quality.l}</option>`))
        })
        $.each(sockets, (idx, socket) => {
            $("#socket").append($(`<option value="${socket.v}">${socket.l}</option>`))
        })
    })

    $(document).on('change', 'select', () => {
        var code = " "
        $('#item, #quality').each((idx, select) => {
            var val = $(select).val()
            if(val && val.length) { code = code + " " + $(select).val().join(" ") }
        })
        $('#socket').each((idx, select) => {
            var val = $(select).val()
            if(val && val.length) { code = code + " (" + val.join(" OR ") + ")" }
        })
        $("#output").text(`ItemDisplay[${code.trim()}]: %NAME%`)
    })
})(jQuery)
(($) => {
    $(document).ready(() => {
        $('select').select2({tags: true, createTag: (params) => { return undefined }})
        
        //this is lazy and not how things should be done
        $('select').each((idx, select) => {
            $.each(window[select.id], (idx, item) => {
                $(`#${select.id}`).append($(`<option value="${item.v}">${item.l}</option>`))
            })
        })
    })
    $(document).on('change', 'select', () => {
        var code = " "

        //again... lazy
        $('select').each((idx, select) => {
            var val = $(select).val()
            var or = $(select).hasClass('or')
            if(val && val.length) { 
                if(or) {
                    code = val.length > 1 ? `${code} (${val.join(" OR ")})` : `${code} ${val}`
                } else {
                    code = val.length > 1 ? `${code} (${val.join(" AND ")})` : `${code} ${val}`
                }
            }
            if(val && val.length) {  }
        })
        $("#output").text(`ItemDisplay[${code.trim()}]: %NAME%`)
    })
})(jQuery)
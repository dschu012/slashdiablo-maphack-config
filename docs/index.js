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
        var codes = []

        //again... lazy
        $('select').each((idx, select) => {
            var vals = $(select).val()
            var or = $(select).hasClass('or')
            var multiple = vals.length > 1
            var c = ''
            $.each(vals, (idx, val) => {
                var v = window[select.id].filter((v) => v.v == val)[0]
                if(idx == 0 && multiple) {
                    c += '('
                }
                c += `<span data-toggle="popover" data-content="${v.l}">${v.v}</span>`
                if(or && idx != vals.length - 1 && multiple) {
                    c += ' OR '
                }
                if(idx == vals.length - 1 && multiple) {
                    c += ')'
                }
            })
            codes.push(c)
        })
        $('#output').html(`ItemDisplay[${codes.join(' ').trim()}]: %NAME%`)
    })
    $(document).popover({ 
        selector: '[data-toggle=popover]',
        trigger: 'hover',
        placement: 'bottom'
    });
})(jQuery)
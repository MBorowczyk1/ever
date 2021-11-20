const fs = require('fs')
const path = require('path')

const updateFile = (file) => {
    const fname = file.split('/')[file.split('/').length - 1]

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err

        // CSS
        const reg = new RegExp('vg_([^-]*)', 'gi')

        const decreaseNumberBy2 = data.match(reg).map((element) => {
            const nr = element.split('_')[1]
            return parseInt(nr, 10) - 2
        })

        const m = data.match(reg)

        if (m === null) return

        const m2 = m.map((item, index) => {
            const newNr = item.replace(item, 'vg_' + decreaseNumberBy2[index])
            return newNr
        })

        let newString = data

        m.map((item, index) => {
            console.log(item)
            const newItem = item.replace(item, m2[index])
            // const reg = new RegExp(item, "gi");

            // newString = newString.replace(reg, newItem);
        })

        console.log(newString)

        // console.log(newString);

        // create new file
        fs.appendFile(`ready/${fname}`, newString, (err) => {
            if (err) throw err
            console.log('Ready!')
        })
    })
}

function fromDir(startPath, filter) {
    if (!fs.existsSync(startPath)) {
        console.log('no dir ', startPath)
        return
    }

    var files = fs.readdirSync(startPath)
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i])
        var stat = fs.lstatSync(filename)
        if (stat.isDirectory()) {
            fromDir(filename, filter) //recurse
        } else if (filename.indexOf(filter) >= 0) {
            // console.log('-- found: ',filename);
            updateFile(filename)
        }
    }
}

fromDir('../base/', '_typography.scss')
// fromDir('../../bisons/flyingbisons.com/app/templates/_include/_caseStudiesOld','kfc-ecommerce.html.twig');

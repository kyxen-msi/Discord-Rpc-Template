const { Client, register } = require('discord-rpc')
const clientId = `Your Application Id`
const client = new Client({ transport: 'ipc' })

async function setActivity() {
    client.setActivity({
        details: 'First Line In Custom Status',
        state: 'Second Line In Custom Status',
        largeImageKey: 'large_image_key', // you can upload on https://discord.com/developers/applications/<your_app_id>/rich-presence/assets
        largeImageText: 'large_image_text',
        smallImageKey: 'small_image_key', // you can upload on https://discord.com/developers/applications/<your_app_id>/rich-presence/assets
        smallImageText: 'small_image_text',
        buttons: [
            {
                label: 'Button 1',
                 url: 'url here'
            },
            {
                label: 'Button 2',
                url: 'url here'
            }
        ]
    })
}

client.on('ready', () => {
    setActivity()
    console.log(`RPC RUNNING!!`)
})



client.login({ clientId})

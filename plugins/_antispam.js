export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 999999) {
            if (this.spam[m.sender].count > 999999) {
                global.db.data.users[m.sender].banned = true
                m.reply('*📮Kamu di banned karena spam*\n\n*💬Laporkan masalah ini ke wa.me/6289516353968?text=📧Bang+tolong+unban+nomor+ku*')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}

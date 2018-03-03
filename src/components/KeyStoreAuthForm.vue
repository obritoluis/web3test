<template>
  <!-- SHAME: useless div is just here because the template must have a single child -->
  <div>
    <form action="#" enctype="multipart/form-data" @submit="submitForm">
      <v-text-field
        name="file"
        label="Password"
        v-model="password"
        type="password"
      ></v-text-field>

      <label for="file">File</label>
      <input id="file" type="file" name="file" @change="updateFile">
      <v-btn type="submit">submit</v-btn>
    </form>
    <!-- TODO: group this somewhere else, a component called EtherPanel or something... -->
    <div v-if="etherBalance">
      Balance: {{ etherBalance }}
    </div>
    <div v-if="privateKey">
      Private Key: {{ privateKey }}
    </div>
    <div v-if="walletAddress">
      Private Key: {{ walletAddress }}
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'

let web3

export default {
  name: 'KeyStoreAuthForm',
  data: function () {
    return {
      file: null,
      password: null,
      privateKey: null,
      walletAddress: null,
      etherBalance: null
    }
  },
  methods: {
    updateFile: function (e) {
      const fileList = e.target.files
      // eslint-disable-next-line
      this.file = (fileList.length > 0 && fileList[0].type === 'application/json') && fileList[0] || null
    },
    getWalletData: function (keyStoreData) {
      try {
        let { privateKey, address: walletAddress } = web3.eth.accounts.decrypt(keyStoreData, this.password)

        this.privateKey = privateKey
        this.walletAddress = walletAddress

        debugger

        web3.eth.getBalance(walletAddress)
          .then((balance) => {
            debugger
            this.etherBalance = web3.utils.fromWei(balance)
          })
          .catch(e => {
            // TODO: treat errors from getBalance
            alert(e)
          })
      } catch (e) {
        // TODO: treat errors from trying to decrypt the keyStore
        alert(e)
      }
    },
    submitForm: function (e) {
      e.preventDefault()

      this.walletAddress = null
      this.privateKey = null
      this.etherBalance = null

      if (this.file) {
        const fileReader = new FileReader()

        fileReader.onload = fileEvent => {
          if (fileEvent.target.readyState === FileReader.DONE) {
            // TODO: treat error that might occur from an unreadable file
            this.getWalletData(JSON.parse(fileEvent.target.result))
          }
        }

        fileReader.readAsBinaryString(this.file)
      }
    }
  },
  mounted () {
    web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546')
  }
}
</script>

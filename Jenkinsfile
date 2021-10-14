pipeline {
  agent any
  stages {
    stage('检出代码') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: env.GIT_BUILD_REF]],
          userRemoteConfigs: [[
            url: env.GIT_REPO_URL,
            credentialsId: env.CREDENTIALS_ID
          ]]])
        }
      }
    }
    stage('构建') {
      steps {
        echo '构建中....'
        sh 'cd src && tar -zcvf /tmp/www.tar.gz .'
        echo '构建完成...'
      }
    }
    stage('部署') {
      steps {
        script {
          echo 'hello CODING'
          def remote = [:]
          remote.name = 'coding'
          remote.allowAnyHosts = true
          remote.host = env.TX_HOST
          remote.port = 22
          remote.user = 'root'

          // SSH 登录到服务器
          // 把「CODING 凭据管理」中的「凭据 ID」填入 credentialsId，而 id_rsa 无需修改
          withCredentials([sshUserPrivateKey(credentialsId: env.TX_SSH_ID, keyFileVariable: 'id_rsa')]) {
            remote.identityFile = id_rsa

            // SSH 上传文件到远端服务器
            sshPut remote: remote, from: '/tmp/www.tar.gz', into: '/tmp/'

            // 解压
            sshCommand remote: remote, command: "rm -rf /tmp/www"
            sshCommand remote: remote, command: "mkdir -p /tmp/www"
            sshCommand remote: remote, command: "tar -zxvf /tmp/www.tar.gz -C /tmp/www"
            sshCommand remote: remote, command: "mkdir -p ~/www"
            sshCommand remote: remote, command: "cp -rp -p /tmp/www/* ~/www"
          }
        }
      }
    }
  }

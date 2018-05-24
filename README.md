# spa-client-boilerplate

Deployment React application
React 16, Eslint, BrowserRouter, Webpack + devserver, docker, pm2


1. Create AWS EC2 instance (generating ec2.pem, to get acces to the instance via ec2.pem key)
2. Teminal: ssh -i ec2.pem ubuntu@{AWS_INSTANCE_IP_PUBLIC} bash // open terminal in folder where we store our .pem key
// sometimes we need submit the command few times, because AWS not response for each submit

We have connection to our instance via teminal

0. $ sudo apt-get update

1. Install Docker
$  sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

$  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$  sudo apt-key fingerprint 0EBFCD88

// See nex info in terminal
// pub   4096R/0EBFCD88 2017-02-22
//      Key fingerprint = 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
// uid                  Docker Release (CE deb) <docker@docker.com>
// sub   4096R/F273FCD8 2017-02-22


$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

2. INSTALL DOCKER CE
$ sudo apt-get update
$ sudo apt-get install docker-ce

3. Check for correct install docker
4. : sudo docker run hello-world



$ git clone .... // for example this repositiry

$ docker build -t <imageName>

$ docker run -p 8080:8080 -d <imageName>

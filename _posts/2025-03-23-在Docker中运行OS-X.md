---
title: 在Docker中运行OS-X
date: 2025-03-21 18:31:00 +0800
categories: [翻译, Docker-OS-X]
tags: [翻译, Docker-OS-X, 教程]   # TAG names should always be lowercase
description: 对于readme.md的翻译
pin: false
---
# Docker-OSX · [关注 @sickcodes Twitter](https://twitter.com/sickcodes)

![在 Docker 容器中运行 Mac OS X](https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/running-mac-inside-docker-qemu.png "OSX KVM DOCKER")

在 Docker 中运行 Mac OS X，接近原生性能！X11 转发！iMessage 安全研究！iPhone USB 支持！macOS 在 Docker 容器中！

在 Linux 和 Windows 上进行 macOS 安全研究！

# Docker-OSX 现在有 Discord 服务器和 Telegram！

Discord 频道在 #docker-osx 中非常活跃，欢迎任何人前来提问、分享想法等。

<p align="center">
    <a href="https://hub.docker.com/r/sickcodes/docker-osx"><img src="https://dockeri.co/image/sickcodes/docker-osx" alt="Docker OSX Image"/></a><a href="https://discord.gg/sickchat"><a href="https://discord.gg/sickchat" target="_blank"><img src="https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/discord-logo.svg" alt="Discord Logo - Docker OSX"></a></a>
</p>


### 点击加入 Discord 服务器 [https://discord.gg/sickchat](https://discord.gg/sickchat)

### 点击加入 Telegram 群组 [https://t.me/sickcodeschat](https://t.me/sickcodeschat)

或者通过 LinkedIn 联系，如果是私密问题：[https://www.linkedin.com/in/sickcodes](https://www.linkedin.com/in/sickcodes)

或者通过 [https://sick.codes/contact/](https://sick.codes/contact/)

## 作者

该项目由 [Sick.Codes](https://sick.codes/) 维护。[(Twitter)](https://twitter.com/sickcodes)

更多致谢请见此处：https://github.com/sickcodes/Docker-OSX/blob/master/CREDITS.md

此外，完整的贡献者列表可以在这里找到：https://github.com/sickcodes/Docker-OSX/graphs/contributors

特别感谢 [@kholia](https://twitter.com/kholia) 维护的上游项目，Docker-OSX 基于此项目构建：[OSX-KVM](https://github.com/kholia/OSX-KVM)。

也特别感谢 [@thenickdude](https://github.com/thenickdude)，他维护了宝贵的分支 [KVM-OpenCore](https://github.com/thenickdude/KVM-Opencore)，该分支最初由 [@Leoyzen](https://github.com/Leoyzen/) 启动！

额外感谢 OpenCore 团队：[https://github.com/acidanthera/OpenCorePkg](https://github.com/acidanthera/OpenCorePkg)。他们维护的引导程序为 Docker-OSX 用户提供了许多出色的功能 :)

如果您喜欢这个项目，可以在这里或者上游进行贡献！

## Docker-OSX 快速入门

视频教程也可以在此处查看：https://www.youtube.com/watch?v=wLezYl77Ll8

**Windows 用户：** [点击查看下面的说明](#id-like-to-run-docker-osx-on-windows)！

<p align="center">
  <a href="https://www.youtube.com/watch?v=wLezYl77Ll8" target="_blank"><img src="https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/Youtube-Screenshot-Docker-OSX-Setup.png" alt="Screenshot of Docker OSX setup on YouTube"></a>
</p>

第一次来这里？尝试 [初始化设置](#initial-setup)，否则请按以下说明使用 Catalina 或 Big Sur。

## 有任何问题、想法，还是只是想聊天？

# [https://discord.gg/sickchat](https://discord.gg/sickchat)

发布的版本名称及其版本：

### Catalina (10.15) [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/latest?label=sickcodes%2Fdocker-osx%3Alatest](https://img.shields.io/docker/image-size/sickcodes/docker-osx/latest?label=sickcodes%2Fdocker-osx%3Alatest)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e SHORTNAME=catalina     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

### Big Sur (11) [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/big-sur?label=sickcodes%2Fdocker-osx%3Abig-sur](https://img.shields.io/docker/image-size/sickcodes/docker-osx/big-sur?label=sickcodes%2Fdocker-osx%3Abig-sur)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e SHORTNAME=big-sur     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

### Monterey (12) [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/monterey?label=sickcodes%2Fdocker-osx%3Amonterey](https://img.shields.io/docker/image-size/sickcodes/docker-osx/monterey?label=sickcodes%2Fdocker-osx%3Amonterey)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e GENERATE_UNIQUE=true     -e MASTER_PLIST_URL='https://raw.githubusercontent.com/sickcodes/osx-serial-generator/master/config-custom.plist'     -e SHORTNAME=monterey     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

### Ventura (13) [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/ventura?label=sickcodes%2Fdocker-osx%3Aventura](https://img.shields.io/docker/image-size/sickcodes/docker-osx/ventura?label=sickcodes%2Fdocker-osx%3Aventura)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e GENERATE_UNIQUE=true     -e MASTER_PLIST_URL='https://raw.githubusercontent.com/sickcodes/osx-serial-generator/master/config-custom.plist'     -e SHORTNAME=ventura     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

### Sonoma (14) [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/sonoma?label=sickcodes%2Fdocker-osx%3Asonoma](https://img.shields.io/docker/image-size/sickcodes/docker-osx/sonoma?label=sickcodes%2Fdocker-osx%3Asonoma)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e GENERATE_UNIQUE=true     -e CPU='Haswell-noTSX'     -e CPUID_FLAGS='kvm=on,vendor=GenuineIntel,+invtsc,vmware-cpuid-freq=on'     -e MASTER_PLIST_URL='https://raw.githubusercontent.com/sickcodes/osx-serial-generator/master/config-custom-sonoma.plist'     -e SHORTNAME=sonoma     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

#### 运行 Catalina 预装 [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/auto?label=sickcodes%2Fdocker-osx%3Aauto](https://img.shields.io/docker/image-size/sickcodes/docker-osx/auto?label=sickcodes%2Fdocker-osx%3Aauto)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
# 需要 40GB 磁盘空间：20GB 原始镜像 + 20GB 容器
docker pull sickcodes/docker-osx:auto

# 直接启动一个真实的 OS X shell，并且有视觉界面 [非无头模式]
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e GENERATE_UNIQUE=true     sickcodes/docker-osx:auto

# 用户名为 user
# 密码为 alpine
```

### 旧版系统

### High Sierra [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/high-sierra?label=sickcodes%2Fdocker-osx%3Ahigh-sierra](https://img.shields.io/docker/image-size/sickcodes/docker-osx/high-sierra?label=sickcodes%2Fdocker-osx%3Ahigh-sierra)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e SHORTNAME=high-sierra     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

### Mojave [![https://img.shields.io/docker/image-size/sickcodes/docker-osx/mojave?label=sickcodes%2Fdocker-osx%3Amojave](https://img.shields.io/docker/image-size/sickcodes/docker-osx/mojave?label=sickcodes%2Fdocker-osx%3Amojave)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
docker run -it     --device /dev/kvm     -p 50922:10022     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e SHORTNAME=mojave     sickcodes/docker-osx:latest

# docker build -t docker-osx .
```

#### 手动下载镜像并在 Docker 中使用

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked?label=sickcodes%2Fdocker-osx%3Anaked](https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked?label=sickcodes%2Fdocker-osx%3Anaked)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

这是一个非常好的下载容器的方式，以防 Docker 的 CDN（或者你的网络连接）比较慢。

```bash
wget https://images2.sick.codes/mac_hdd_ng_auto.img

docker run -it     --device /dev/kvm     -p 50922:10022     -v "${PWD}/mac_hdd_ng_auto.img:/image"     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e GENERATE_UNIQUE=true     -e MASTER_PLIST_URL=https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/custom/config-nopicker-custom.plist     -e SHORTNAME=catalina     sickcodes/docker-osx:naked
```

#### 使用您自己的镜像并手动自动登录到 shell

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked-auto?label=sickcodes%2Fdocker-osx%3Anaked-auto](https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked-auto?label=sickcodes%2Fdocker-osx%3Anaked-auto)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

```bash
# Catalina
# wget https://images2.sick.codes/mac_hdd_ng_auto.img

# Monterey
wget https://images.sick.codes/mac_hdd_ng_auto_monterey.img

docker run -it     --device /dev/kvm     -p 50922:10022     -v "${PWD}/mac_hdd_ng_auto_monterey.img:/image"     -v /tmp/.X11-unix:/tmp/.X11-unix     -e "DISPLAY=${DISPLAY:-:0.0}"     -e "USERNAME=user"     -e "PASSWORD=alpine"     -e GENERATE_UNIQUE=true     -e MASTER_PLIST_URL=https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/custom/config-nopicker-custom.plist     -e SHORTNAME=monterey     sickcodes/docker-osx:naked-auto
```

# 共享目录、共享文件、共享文件夹、挂载文件夹

最简单且最安全的方式是 `sshfs`

```bash
# 在 Linux/Windows 上
mkdir ~/mnt/osx
sshfs user@localhost:/ -p 50922 ~/mnt/osx
# 等待几秒钟，~/mnt/osx 将会挂载整个 rootfs 到 ssh 用户空间
# 自动化：sshpass -p <password> sshfs user@localhost:/ -p 50922 ~/mnt/osx
```

# (VFIO) iPhone USB 直通 (VFIO)

如果您使用的是笔记本，请查看接下来的 usbfluxd 部分。

如果您使用的是桌面 PC，您可以使用 [@Silfalion](https://github.com/Silfalion) 的说明：[https://github.com/Silfalion/Iphone_docker_osx_passthrough](https://github.com/Silfalion/Iphone_docker_osx_passthrough)

```bash
sudo systemctl start usbmuxd
sudo avahi-daemon
```


# (USBFLUXD) iPhone USB -> Network 风格的 passthrough OSX-KVM Docker-OSX

USBFLUXD 设置的视频教程也可以在此处查看：https://www.youtube.com/watch?v=kTk5fGjK_PM

<p align="center">
  <a href="https://www.youtube.com/watch?v=kTk5fGjK_PM" target="_blank"><img alt="iPhone USB passthrough on macOS virtual machine Linux & Windows" src="https://raw.githubusercontent.com/sickcodes/Docker-OSX/master/Youtube-USBFLUXD-Screenshot-Docker-OSX.png"></a>
</p>

这种方法在笔记本电脑、PC 和其他任何设备上都有效！

感谢 [@nikias](https://github.com/nikias) 提供 [usbfluxd](https://github.com/corellium/usbfluxd)，以及 [https://github.com/corellium](https://github.com/corellium)！

**此操作在 Linux 内进行。**

打开 Linux 上的 3 个终端

在 Linux 上通过 USB 连接您的设备，使用 [https://github.com/corellium/usbfluxd](https://github.com/corellium/usbfluxd) 在同一网络中的另一个系统上公开 `usbmuxd`，并将其映射到端口 `5000`。

确保安装了 `usbmuxd`、`socat` 和 `usbfluxd`。

```bash
sudo pacman -S libusbmuxd usbmuxd avahi socat
```

在 AUR 上有 [usbfluxd](https://aur.archlinux.org/packages/usbfluxd/)。

```bash
yay usbfluxd
```

插入您的 iPhone 或 iPad。

终端 1：
```bash
sudo systemctl start usbmuxd
sudo avahi-daemon
```

终端 2：
```bash
# 在主机上
sudo systemctl restart usbmuxd
sudo socat tcp-listen:5000,fork unix-connect:/var/run/usbmuxd
```

终端 3：
```bash
sudo usbfluxd -f -n
```

### 连接到运行 usbfluxd 的主机

**此操作在 macOS 内进行。**

安装 homebrew。

`172.17.0.1` 通常是 Docker 桥接 IP 地址，即您的 PC 地址，但您可以使用 `ip addr` 查看其他 IP 地址。

macOS 终端：
```zsh
# 在客户端
brew install make automake autoconf libtool pkg-config gcc libimobiledevice usbmuxd

git clone https://github.com/corellium/usbfluxd.git
cd usbfluxd

./autogen.sh
make
sudo make install
```

接受 USB TCP 连接，并显示为本地设备：

（您可能需要将 `172.17.0.1` 更改为主机的 IP 地址。例如，检查 `ip addr`）

```bash
# 在客户端
sudo launchctl start usbmuxd
export PATH=/usr/local/sbin:${PATH}
sudo usbfluxd -f -r 172.17.0.1:5000
```

关闭 Xcode 等应用并重新打开，您的设备应该会显示！

*如果需要重新开始 Linux，请清除当前的 usbfluxd、usbmuxd 和 socat：*
```bash
sudo killall usbfluxd
sudo systemctl restart usbmuxd
sudo killall socat
```

## 使用 [https://github.com/sickcodes/osx-optimizer](https://github.com/sickcodes/osx-optimizer) 提升容器速度

请参见 [https://github.com/sickcodes/osx-optimizer](https://github.com/sickcodes/osx-optimizer) 中的命令！

- 跳过 GUI 登录屏幕（自行承担风险！）
- 禁用 macOS 上的 Spotlight 索引，以大幅提升虚拟实例速度。
- 禁用登录屏幕上的重型壁纸
- 禁用更新（自行承担风险！）

## 通过将 /var/lib/docker 移动到外部驱动器、块存储、NFS 或任何其他位置来增加磁盘空间。

按以下教程移动 /var/lib/docker

- 使用便宜的大容量物理磁盘替代服务器的磁盘或 SSD。
- 块存储、NFS 等。

教程在此：[如何使用块存储运行 Docker](https://sick.codes/how-to-run-docker-from-block-storage/)

只有在您已经移动了当前 Docker 镜像/层后，才能遵循上述教程。

安全模式：暂时禁用 Docker，以便您可以临时移动 Docker 文件夹。

```bash
killall dockerd
systemctl disable --now docker
systemctl disable --now docker.socket
systemctl stop docker
systemctl stop docker.socket
```

现在，Docker 守护进程已经关闭，移动 /var/lib/docker 到某个地方。

然后，创建 /var/lib/docker 的符号链接到新的位置：

```bash
mv /var/lib/docker /run/media/user/some_drive/docker
ln -s /run/media/user/some_drive/docker /var/lib/docker

# 现在检查 /var/lib/docker 是否正常工作
ls /var/lib/docker
```

如果您看到文件夹，那么它工作正常。您可以重新启动 Docker 或直接重启以确认。

## 重要事项：

**2021-11-14** - 添加了 High Sierra、Mojave

在构建时请选择以下之一，使用 `docker pull` 时无关紧要：

```
--build-arg SHORTNAME=high-sierra 
--build-arg SHORTNAME=mojave
--build-arg SHORTNAME=catalina
--build-arg SHORTNAME=big-sur
--build-arg SHORTNAME=monterey
--build-arg SHORTNAME=ventura
--build-arg SHORTNAME=sonoma
```

## 技术细节

目前有多个镜像，每个镜像适用于不同的用途（在 [下文](#container-images) 中解释）：

- High Sierra (10.13)
- Mojave (10.14)
- Catalina (10.15)
- Big Sur (11)
- Monterey (12)
- Ventura (13)
- Sonoma (14)
- Auto (预先配置好的 Catalina 系统)
- Naked（使用您自己的 .img 文件）
- Naked-Auto（使用您自己的 .img 文件并支持 SSH 登录）

High Sierra：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/high-sierra?label=sickcodes%2Fdocker-osx%3Ahigh-sierra](https://img.shields.io/docker/image-size/sickcodes/docker-osx/high-sierra?label=sickcodes%2Fdocker-osx%3Ahigh-sierra)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Mojave：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/mojave?label=sickcodes%2Fdocker-osx%3Amojave](https://img.shields.io/docker/image-size/sickcodes/docker-osx/mojave?label=sickcodes%2Fdocker-osx%3Amojave)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Catalina：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/latest?label=sickcodes%2Fdocker-osx%3Alatest](https://img.shields.io/docker/image-size/sickcodes/docker-osx/latest?label=sickcodes%2Fdocker-osx%3Alatest)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Big-Sur：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/big-sur?label=sickcodes%2Fdocker-osx%3Abig-sur](https://img.shields.io/docker/image-size/sickcodes/docker-osx/big-sur?label=sickcodes%2Fdocker-osx%3Abig-sur)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Monterey 制作您自己的镜像：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/monterey?label=sickcodes%2Fdocker-osx%3Amonterey](https://img.shields.io/docker/image-size/sickcodes/docker-osx/monterey?label=sickcodes%2Fdocker-osx%3Amonterey)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Ventura 制作您自己的镜像：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/ventura?label=sickcodes%2Fdocker-osx%3Aventura](https://img.shields.io/docker/image-size/sickcodes/docker-osx/ventura?label=sickcodes%2Fdocker-osx%3Aventura)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Sonoma 制作您自己的镜像：

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/sonoma?label=sickcodes%2Fdocker-osx%3Asonoma](https://img.shields.io/docker/image-size/sickcodes/docker-osx/sonoma?label=sickcodes%2Fdocker-osx%3Asonoma)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

预构建 **Catalina** 系统，来自 [Sick.Codes](https://sick.codes)：用户名：`user`，密码：`alpine`

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/auto?label=sickcodes%2Fdocker-osx%3Aauto](https://img.shields.io/docker/image-size/sickcodes/docker-osx/auto?label=sickcodes%2Fdocker-osx%3Aauto)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Naked：使用您自己的镜像设置（首先使用上面的任一镜像）

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked?label=sickcodes%2Fdocker-osx%3Anaked](https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked?label=sickcodes%2Fdocker-osx%3Anaked)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

Naked Auto：与上面相同，但支持 `-e USERNAME`、`-e PASSWORD` 和 `-e OSX_COMMANDS="put your commands here"`

[![https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked-auto?label=sickcodes%2Fdocker-osx%3Anaked-auto](https://img.shields.io/docker/image-size/sickcodes/docker-osx/naked-auto?label=sickcodes%2Fdocker-osx%3Anaked-auto)](https://hub.docker.com/r/sickcodes/docker-osx/tags?page=1&ordering=last_updated)

## 能力

- 在 Linux 上使用 iPhone OSX KVM 和 [usbfluxd](https://github.com/corellium/usbfluxd)！
- 在 Linux 上运行 macOS Monterey VM！
- 文件夹共享-
- USB 直通（包括热插拔）
- 启用 SSH（`localhost:50922`）
- 启用 VNC（`localhost:8888`），如果使用 ./vnc 版本
- 使用 [序列号生成器！](https://github.com/sickcodes/osx-serial-generator) 进行 iMessage 安全研究
- 启用 X11 转发
- 基于 QEMU + KVM 运行
- 支持 Big Sur、自定义镜像、Xvfb 无头模式
- 您可以使用 `docker commit` 克隆容器

### 系统要求

- 最少 20GB 磁盘空间（如果使用 Xcode，则需要 50GB）
- BIOS 设置中应启用虚拟化
- 支持 x86_64 架构的 kvm 主机
- 至少 50GB 用于 `:auto`（一半用于基础镜像，一半用于运行时镜像）

### TODO

- 针对安全研究员的文档
- GPU 加速
- 支持 virt-manager

## Docker

基于此存储库内容构建的镜像也可以方便地从 **Docker Hub** 获取：[https://hub.docker.com/r/sickcodes/docker-osx](https://hub.docker.com/r/sickcodes/docker-osx)

可用的 Docker 镜像及其用途的详细列表可以在 [说明](#instructions) 中找到。

## Kubernetes

Docker-OSX 支持 Kubernetes。

Kubernetes Helm Chart 和文档可以在 [helm 目录](#helm-readme) 下找到。

感谢 [cephasara](https://github.com/cephasara) 对此重大贡献的支持。

[![Artifact HUB](https://img.shields.io/endpoint?url=https://artifacthub.io/badge/repository/docker-osx)](https://artifacthub.io/packages/search?repo=docker-osx)

## 支持

### 小问题和疑问

如果您遇到一些小问题或有任何问题，随时可以打开 [issue](https://github.com/sickcodes/Docker-OSX/issues/new/choose)。

#### 已解决的问题

在您打开问题之前，请查看 [已关闭的问题](https://github.com/sickcodes/Docker-OSX/issues?q=is%3Aissue+is%3Aclosed)，并确认您正在使用此存储库的最新版本——您的问题可能已经解决！您也可以在我们的问答部分找到答案 [更多问题和答案](#more-questions-and-answers)。

### 特性请求和更新

关注 [@sickcodes](https://twitter.com/sickcodes)！

### 专业支持

对于更复杂的需求，我们提供以下支持服务：

- 企业支持、业务支持或休闲支持。
- 自定义镜像、自定义脚本、咨询（按小时计费！）
- 与您或您的开发团队进行一对一的交流。

如有兴趣，请通过 [@sickcodes on Twitter](https://twitter.com/sickcodes) 或点击 [此处](https://sick.codes/contact) 联系。

## 许可证/贡献

Docker-OSX 采用 [GPL v3+](#license) 许可证。欢迎并非常感谢您的贡献。实际上，您可以将 Docker-OSX 用作工具来创建专有软件。

### 其他有趣的 Docker/QEMU 项目

- [使用 Dock Droid 在 Docker 容器中运行 Android](https://github.com/sickcodes/dock-droid)
- [在主机上完全原生运行 Android！](https://github.com/sickcodes/droid-native)
- [在 Docker 容器中运行 iOS 12，使用 Docker-eyeOS](https://github.com/sickcodes/Docker-eyeOS) - [https://github.com/sickcodes/Docker-eyeOS](https://github.com/sickcodes/Docker-eyeOS)
- [使用 Bluebubbles.app 在 Docker 中运行 iMessage 转发器](https://bluebubbles.app/) - [快速开始 wiki](https://github.com/BlueBubblesApp/BlueBubbles-Server/wiki/Running-via-Docker)

## 免责声明

如果您认真对待 Apple 安全，并可能在 Apple Bug Bounty 项目中找到六位数的漏洞赏金，那么您来对地方了！更多说明：[Hackintosh、OSX-KVM 或 Docker-OSX 合法性？](https://sick.codes/is-hackintosh-osx-kvm-or-docker-osx-legal/)

本项目中的产品名称、标志、品牌及其他商标均为其各自商标持有人的财产。这些商标持有人与我们的存储库没有任何关联，也不以任何方式赞助或支持本项目。
# 说明

## 容器镜像

### 已经设置好或者只是想快速创建一个容器？查看我们的 [快速入门](#quick-start-docker-osx) 或在 [容器创建示例](#container-creation-examples) 部分查看更多用例。

有几种不同的 Docker-OSX 镜像适用于不同的目的。

- `sickcodes/docker-osx:latest` - [我只是想试试它。](#quick-start-docker-osx)
- `sickcodes/docker-osx:latest` - [我想用 Docker-OSX 在 Xcode 中开发/安全测试应用（登录到 Xcode，Transporter）。](#quick-start-your-own-image-naked-container-image)
- `sickcodes/docker-osx:naked` - [我想使用 Docker-OSX 进行 CI/CD 相关的工作（登录到 Xcode，Transporter）。](#building-a-headless-container-from-a-custom-image)

使用 `:latest` 或 `big-sur` 创建您的个人镜像。然后，提取镜像。之后，您可以将该镜像导入到 `:naked` 容器中，以便重复将容器恢复到先前的状态。

- `sickcodes/docker-osx:auto` - [我只对使用命令行感兴趣（对于编译软件或无头使用 Homebrew 很有用）。](#prebuilt-image-with-arbitrary-command-line-arguments)
- `sickcodes/docker-osx:naked` - [我需要 iMessage/iCloud 进行安全研究。](#generating-serial-numbers)
- `sickcodes/docker-osx:big-sur` - [我想运行 Big Sur。](#quick-start-docker-osx)
- `sickcodes/docker-osx:monterey` - [我想运行 Monterey。](#quick-start-docker-osx)
- `sickcodes/docker-osx:ventura` - [我想运行 Ventura。](#quick-start-docker-osx)
- `sickcodes/docker-osx:sonoma` - [我想运行 Sonoma。](#quick-start-docker-osx)

- `sickcodes/docker-osx:high-sierra` - 我想运行 High Sierra。
- `sickcodes/docker-osx:mojave` - 我想运行 Mojave。

## 初始化设置

在做任何事情之前，您需要在 BIOS 中开启硬件虚拟化。具体步骤会根据您的机器和 BIOS 略有不同，但应该比较简单。

然后，您需要在主机上安装 QEMU 和其他一些依赖：

```bash
# ARCH
sudo pacman -S qemu libvirt dnsmasq virt-manager bridge-utils flex bison iptables-nft edk2-ovmf

# UBUNTU DEBIAN
sudo apt install qemu qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager libguestfs-tools

# CENTOS RHEL FEDORA
sudo yum install libvirt qemu-kvm
```

然后，启用 libvirt 并加载 KVM 内核模块：

```bash
sudo systemctl enable --now libvirtd
sudo systemctl enable --now virtlogd

echo 1 | sudo tee /sys/module/kvm/parameters/ignore_msrs

sudo modprobe kvm
```

### 我想在 Windows 上运行 Docker-OSX

可以通过 WSL2（Windows 11 + Windows Subsystem for Linux）在 Windows 上运行 Docker-OSX。

您必须安装 Windows 11，并且版本需要是 22000+（21H2 或更高版本）。

首先，在管理员 PowerShell 中运行以下命令安装 WSL。更多信息请查看 [这里](https://docs.microsoft.com/en-us/windows/wsl/install)。

```bash
wsl --install
```

可以使用 `wsl -l -v` 在 PowerShell 中确认 WSL2 是否已启用。要查看其他可用的发行版，使用 `wsl -l -o`。

如果您之前安装了 WSL1，请升级到 WSL 2。查看 [如何从 WSL1 升级到 WSL2](https://docs.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2)。

安装 WSL 后，转到 `C:/Users/<Your_Name>/.wslconfig` 文件并在文件末尾添加 `nestedVirtualization=true`（如果文件不存在，则创建该文件）。更多信息请查看 [此链接](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig)。确保在文件资源管理器选项中选择 "显示隐藏的文件" 和 "显示文件扩展名"。

文件内容应如下所示：

```
[wsl2]
nestedVirtualization=true
```

进入您的 WSL 发行版（在 PowerShell 中运行 `wsl`）并使用 `kvm-ok` 命令检查 KVM 是否已启用。输出应类似于以下内容：

```
INFO: /dev/kvm exists
KVM acceleration can be used
```

如果未启用 KVM，请使用以下命令安装：

```bash
sudo apt -y install bridge-utils cpu-checker libvirt-clients libvirt-daemon qemu qemu-kvm
```

安装完 Docker for Windows 后，进入设置并勾选这两个框：

```
General -> "Use the WSL2 based engine";
Resources -> WSL Integration -> "Enable integration with my default WSL distro", 
```

确保已安装 `x11-apps`。如果没有，使用以下命令进行安装：

```bash
sudo apt install x11-apps -y
```

最后，您可以通过三种方式获取视频输出：

- **WSLg**: 这是最简单、最容易使用的选项。可能会有一些问题，如键盘未完全通过或在桌面上看到第二个鼠标 - [WSLg 问题](https://github.com/microsoft/wslg/issues/376)，但这是推荐的选项。

要使用 WSLg 内置的 X-11 服务器，请在 docker run 命令中更改以下两行，以使 Docker-OSX 指向 WSLg。

```bash
-e "DISPLAY=${DISPLAY:-:0.0}" -v /mnt/wslg/.X11-unix:/tmp/.X11-unix ```

或者尝试：

```bash
-e "DISPLAY=${DISPLAY:-:0}" -v /mnt/wslg/.X11-unix:/tmp/.X11-unix ```

对于 Windows 上的 Ubuntu 20.x，请查看 [https://github.com/sickcodes/Docker-OSX/discussions/458](https://github.com/sickcodes/Docker-OSX/discussions/458)

- **VNC**: 请查看 [VNC 部分](#building-a-headless-container-which-allows-insecure-vnc-on-localhost-for-local-use-only) 以获取更多信息。您还可以将 `-vnc` 参数添加到 qemu。使用 VNC 客户端连接到您的 mac 虚拟机。[这里有个如何操作的指南](https://wiki.archlinux.org/title/QEMU#VNC)。

- **桌面环境**: 这将为您提供完整的桌面 Linux 体验，但会占用更多计算机资源。这里有一个示例指南，此外还有其他帮助设置桌面环境的指南。[DE 示例](https://www.makeuseof.com/tag/linux-desktop-windows-subsystem/)

## 其他启动说明

在您 [创建容器](#container-creation-examples) 时，以下是一些其他启动指导：

- 启动 macOS 基础系统（按 Enter 键）
- 点击 `磁盘工具`，然后擦除最大的磁盘（默认约为 200GB），**不要修改较小的磁盘**。
- 如果您无法点击 `擦除`，请尝试将磁盘大小减少 1KB。
- 可选：如果您想限制容量，可以使用未使用的空间创建一个分区（对于 Xcode 12，至少分配 60GB）。
- 点击 `重新安装 macOS`，系统可能会要求在安装过程中多次重启。

## 故障排除

### 常规检查

这是一个很好的开始，特别是如果您还不熟悉 Docker 的话。

如果您只是想快速创建一个容器，请查看我们的 [容器创建示例](#container-creation-examples) 部分。

更具体的高级故障排除问题和答案可以在 [更多问题和答案](#more-questions-and-answers) 部分找到。如果您无法在文档中找到，您还可以查看 [已关闭的问题](https://github.com/sickcodes/Docker-OSX/issues?q=is%3Aissue+is%3Aclosed)。其他人可能已经回答了类似的问题！

#### 确认您的 CPU 是否支持虚拟化

请参见 [初始化设置](#initial-setup)。
## 常见问题解答 (FAQ)

### 为什么 Docker-OSX 需要如此多的磁盘空间？

Docker-OSX 镜像是非常庞大的，因为它不仅包含了 macOS 操作系统，还包括 QEMU、KVM、必要的依赖包和一些其他工具。为了确保镜像能够成功运行，磁盘空间的分配是必须的。

### 如何解决 Docker 容器无法启动的问题？

如果您的 Docker 容器无法启动，首先确保您已按照安装步骤正确安装了 Docker 和所需的其他依赖项。然后，请检查容器日志以确定错误原因。您可以通过运行 `docker logs <container_id>` 查看容器日志。如果遇到权限问题，确保您使用的账户有足够的权限来执行 Docker 操作。

### 我的 macOS 容器启动缓慢怎么办？

macOS 容器的启动时间可能会比较长，尤其是在第一次启动时。这是因为容器需要加载所有的文件系统和虚拟机环境。要提高启动速度，您可以尝试关闭不必要的服务，或者增加虚拟化硬件支持（如启用 VT-x 和 KVM）。

### Docker 容器中为什么没有显示图形界面？

如果您没有看到 macOS 图形界面，首先检查您的 X11 转发设置，确保您在运行容器时使用了 `-v /tmp/.X11-unix:/tmp/.X11-unix` 参数。其次，确保 X11 服务已启动，并且正确配置了 DISPLAY 环境变量。

### 如何在 Docker 容器中使用 iMessage？

要在 Docker 容器中使用 iMessage，您需要一个有效的 Apple ID 和对应的序列号。Docker-OSX 支持通过序列号生成器（[osx-serial-generator](https://github.com/sickcodes/osx-serial-generator)）来生成合法的序列号，并将其用于 macOS 中的 iMessage。

### 如何加速 Docker-OSX 容器的性能？

加速 Docker-OSX 容器的性能有几种方法：

1. 启用 KVM 和虚拟化加速。
2. 减少容器中不必要的服务和进程。
3. 将 Docker 容器的存储空间移动到更快的磁盘或 SSD 上。
4. 使用硬件加速选项，如 QEMU 的 `-cpu host` 参数。

### 为什么 macOS 容器会崩溃或无法启动？

容器崩溃的原因可能有很多。常见的问题包括磁盘空间不足、内存不足、或 Docker 配置错误。首先检查容器日志，确保所有的依赖项都正确安装，并且虚拟化设置已启用。如果问题仍然存在，您可以在 GitHub Issues 区域搜索相关问题。

### 如何将 Docker-OSX 用于持续集成 (CI)？

您可以将 Docker-OSX 用于持续集成任务，尤其是当您需要一个临时的 macOS 环境来测试您的应用时。通过使用 `docker-compose` 或其他 CI/CD 工具，您可以快速创建和销毁 Docker-OSX 容器以进行自动化测试。请确保容器配置适合您的 CI/CD 系统，并根据需要调整环境变量和资源分配。

## 贡献指南

如果您对 Docker-OSX 项目有任何想法、建议或修复，欢迎提交 pull request。我们非常欢迎社区的贡献！

1. 克隆项目：
   ```bash
   git clone https://github.com/sickcodes/Docker-OSX.git
   ```
2. 创建一个新的分支并进行修改：
   ```bash
   git checkout -b your-branch-name
   ```
3. 提交更改并推送：
   ```bash
   git commit -am "Description of changes"
   git push origin your-branch-name
   ```
4. 提交 pull request，描述您的更改和解决的问题。

在贡献之前，请确保您的代码符合项目的代码风格和贡献指南。如果您的更改涉及新功能或重大修改，最好先与项目维护者进行讨论。

## 项目维护者

Docker-OSX 由 Sick.Codes 维护和开发。项目的维护者包括 Sick.Codes 和其他社区贡献者。

## 联系我们

- 电子邮件：[contact@sick.codes](mailto:contact@sick.codes)
- 个人网站：[https://sick.codes](https://sick.codes)
- Twitter：[@sickcodes](https://twitter.com/sickcodes)
- GitHub：[https://github.com/sickcodes](https://github.com/sickcodes)
- Discord：[https://discord.gg/sickchat](https://discord.gg/sickchat)

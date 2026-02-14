# anisette-v3-server

A supposedly lighter alternative to [omnisette-server](https://github.com/SideStore/omnisette-server)

Like `omnisette-server`, it supports both currently supported SideStore's protocols (anisette-v1 and 
anisette-v3) but it can also be used with AltServer-Linux.

## Run using Docker

```bash
docker run -d --restart always --name anisette-v3 -p 6969:6969 --volume anisette-v3_data:/home/Alcoholic/.config/anisette-v3/lib/ dadoum/anisette-v3-server
```

## Compile using dub

```bash
apt update && apt install --no-install-recommends -y ca-certificates ldc git clang dub libz-dev libssl-dev
git clone https://github.com/Dadoum/anisette-v3-server.git; cd anisette-v3-server
DC=ldc2 dub build -c "static" --build-mode allAtOnce -b release --compiler=ldc2
stat anisette-v3-server
```

## Ansible

If you want to quickly setup anisette-v3 with ansible, just use the setup-anisette-v3-ansible.yaml playbook.
Setup your inventory and choose your desired host in the playbook. Tweak your parameters/ansible.cfg for the remote_user you use. Requires root.
```bash
ansible-playbook -i inventory setup-anisette-v3-ansible.yaml -k
```

## Cloudflare (Containers)

This repo includes a Cloudflare Containers Worker (runs `Dockerfile`).

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/TastyHeadphones/anisette-v3-server)

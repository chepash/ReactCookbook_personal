# Генерация SSL-сертификата для локальной разработки

## Шаги по созданию самоподписанного SSL-сертификата

1. Генерация приватного ключа:

```bash
# Создаем приватный ключ с шифрованием DES3 и длиной 2048 бит
openssl genrsa -des3 -out mykey.key 2048
# Фраза-пароль для mykey.key: 12345678
```

2. Создание самоподписанного сертификата:

```bash
# Генерируем самоподписанный сертификат, используя созданный ключ
openssl req -x509 -new -nodes -key mykey.key -sha256 -days 2048 -out mypem.pem
# Заполняем информацию о сертификате:
# Country Name (2 letter code) []:US
# State or Province Name (full name) []:Massachusetts
# Locality Name (eg, city) []:Cambridge
# Organization Name (eg, company) []:O'Reilly Media
# Organizational Unit Name (eg, section) []:Harmless scribes
# Common Name (eg, fully qualified host name) []:Local
# Email Address []:me@example.com
```

3. Создание запроса на подпись сертификата (CSR):

```bash
# Генерируем CSR и новый приватный ключ одной командой
openssl req -new -nodes -out myprivate.csr -newkey rsa:2048 -keyout myprivate.key -subj "/C=US/ST=Massachusetts/L=Cambridge/O=O'Reilly Media/OU=Harmless scribes/CN=Local/emailAddress=me@example.com" -sha256
```

4. Создание файла конфигурации для расширений сертификата:

```bash
# Создаем файл extfile.txt с необходимыми расширениями
echo 'authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage=digitalSignature,nonRepudiation,keyEncipherment,dataEncipherment
subjectAltName=DNS:localhost' > extfile.txt
```

5. Подписание CSR с помощью самоподписанного сертификата:

```bash
# Подписываем CSR, создавая итоговый сертификат
openssl x509 -req -in myprivate.csr -CA mypem.pem -CAkey mykey.key -CAcreateserial -out myprivate.crt -days 500 -sha256 -extfile ./extfile.txt
```

6. Настройка переменных окружения для использования SSL в проекте:

```bash
# Добавьте следующие строки в файл .env вашего проекта
HTTPS=true
SSL_CRT_FILE=myprivate.crt
SSL_KEY_FILE=myprivate.key
```

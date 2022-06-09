#! /bin/bash
node main.js << EOF
Tanmay
1999-07-03
art
0123456789
abc
xyz
EOF

ACTUAL=$( cat ./formData.json )

EXPECTED='{"name":"Tanmay","dob":"1999-07-03","hobbies":["art"],"phNo":"0123456789","address":"abc\nxyz"}'

if [[ "${ACTUAL}" == "${EXPECTED}" ]]
  then
    echo "PASS"
  else
    echo "FAIL"
fi
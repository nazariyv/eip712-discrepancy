#!/usr/bin/env python
from eip712.messages import EIP712Message, EIP712Type
from eth_account import Account

print("EIP-712 PY")

class Player(EIP712Type):
    wallet: "address"
    email: "string"


class Message(EIP712Message):
    _chainId_: "uint256" = 0
    _name_: "string" = ''
    _verifyingContract_: "address" = '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
    _version_: "string" = '' 

    player: Player 

signature = bytes.fromhex('f65e247fc142c6fa98febae4dba127be1694e83a5fce938c4389945594a5acd454771cdf810b90f2f83d60c69f8d576d5ff8dab957f57b2a247c86baffae6d011c')

message = Message(player=Player(
    wallet='0x14791697260E4c9A71f18484C9f997B308e59325',
    email='steve@jobs.com'
))

from_account = Account.recover_message(message.signable_message, signature=signature)
print('Account that signed the message: ', from_account)
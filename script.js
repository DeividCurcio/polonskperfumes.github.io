// Gerar 30 produtos automaticamente
const produtos = Array.from({ length: 30 }, (_, i) => ({
  nome: `Perfume ${i + 1}`,
  descricao: "Aroma sofisticado e marcante.",
  preco: (89.9 + i * 2).toFixed(2),
  imagem: i === 0
    ? 'https://areademulher.r7.com/wp-content/uploads/2019/08/confira-o-top-20-de-melhores-perfumes-importados-15.jpg'
    : i === 1
      ? 'https://m.media-amazon.com/images/I/81B6MrsPIkL._AC_SX342_SY445_QL70_ML2_.jpg'
      : i === 2
        ? 'https://m.media-amazon.com/images/I/41+wnbEZ3GL._AC_SX300_SY300_QL70_ML2_.jpg'
        : i === 3
          ? 'https://m.media-amazon.com/images/I/61QFvUF8ylL._AC_SY300_SX300_QL70_ML2_.jpg'
          : i === 4
            ? 'https://imageswscdn.wslojas.com.br/files/28918/MED_produto-perfume-arabe-feminino-lataffa-eclaire-edp-100ml-3004.png'
          : i === 5
            ? 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_NuZa1LeQqnI77eFsTYxKvT5_QYye2kCdSX7KkCfBE-s4ND6divGnQfFgykgMi4sewroLBg3f2II67mkSFQ3nKP4oHhreG20BtYCuotkU'
          : i === 6
            ? 'https://cdn.dooca.store/154835/products/img-2524_1080x1080.jpeg?v=1733519183&webp=0'
          : i === 7
            ? 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRkg8DCaI6JNJ3zQlVqH7v1Gd8TNLSI73UBLYsKGd1ALgX9FKKS9lXcPeQpKWi30_saW43TvLZDnOGha7Mc6xRP5_PR-0PedSJl_AYaVS4nbtPbDCSNKqB'
          : i === 8
            ? 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1z00FbdcR9vyRwCscA0EWwFoe27WM8iokfLLd5ntX5s4Abi1udaUk7OVgwcqR8GFHwdP4CjqY0pz6eqQW_BvVbTrU4_zNXcGZ3-fgKgNI95oTcSl1RnMS'
          : i === 9
            ? 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDhUfQWhcCPjYLBQUlSVhEKfjebVq8tr9VNVOg-W2lVZU0ZkxXJ8p-YwGRDR1Sjaj4rkCurTrSgoeyV360NxWhhbvTA3C2OurEiRIYAPyGAvY8Hw6Nyma6'
          : i === 10
            ? 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYIx4zgJGaRVp4B6VPWMqq23cVzZJNCIAij0O3k-Me95RIXN7AWoF_w207YRLqU04aICea5gkmsLnRHQEe9azDaoxarM6ccqW8cO-4NNIYi5PwXLmxAieD'
          : i === 11
            ? 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjHjXSzriG4A3PjN351EAsgADTMMqP-szgVvElWOvd0xmPTKfpOBm6AKZNGJe35K531qlSJBKMRJAsJ2wUkmXPwX6EcITXBxOo21CAug9EGACQPEZRbem57o8'
          : i === 12
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2n5zBDd7CWlIp5GUV4e_eJ4Oz8OrJQTw6okaPdt9_FnTKXgGAUr0U_A&s'
          : i === 13
            ? 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFh4YGBgYFxgXFxgYGx4aGxsYFxgYHiggGBolHRgXIzEhJykrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy4mICUtLS0uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABLEAABAwIDBAYECQoDCAMAAAABAAIRAyEEEjEFQVFxBhMiYYGRBzKhsRQjM3KSssHR8CQ1QlJic3SCovEWNOEVQ0Rjg8LD0lOTo//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAwEQACAgECAgkDAwUAAAAAAAAAAQIRAyExBBITFCIyQVFhcaEzkdEFweFSgaKx8f/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCLRtrekYU3FtHBYmvBIzDIxhi1i50+xa/X9KO0J7GyDH7VcE+Qas+mx/1L7l+jn5M6yi4Y/0240GPgFK2vxjvuQenHF78BT8KjvuV7KHc0XGcF6aMTUmNmuMa5HF8c7BSND0q1netgsQzvNBzh/S+fYqvJFbssoN7HVUWgUenFVzS4NaIv26VWke+1QibbxKtnp+6bPoacD7e0qPPBF1hkdDRc6f0+f8Ar0O6xMf1XVD+n1SbOpfRJ+26jrECegkdIRc3PTur+sz6BRnTisR67Af3Z9idYgOgkdIRc1/xxXizh/8AWT9i8PTavaHf/kfuKdYgOgl6HS0XNP8AGmJ/W8qR/wDVef4zxPFw/wCg639CjrMB0EvQ6Yi5n/jDFfrVO78ncZ/oWVh+mtceswuH7iuD5tbHsTrMA8EjoSLVcF03pOgVKOIpnj1NZzfMMn2LaKbw4AgyCJHJaxyRl3WZyi47lSIiuVCIiAIiIAiIgCIiA4ziBD33NnHeDF9Y93JGO3zbW9pjgruNy53Rrnf9Y6rFxRhlQ8GOPkDp4Qvmn3j2/A5ljKYaGEOzF7A92nZJPq2Ou/xTDYcOZUcXR1YBA/WJMQL+O+wKw9O5eOP4819DTqrPGvU3DoIOzVPe0eQcftWzOqxvWt9CD8TUP/Mjya1TVZ/Pw14fjmvF4p3mkeng+mia6H1M2KZJmA4j6JXTyY/Gq5X0McfhYmfUcdQQLEWPLUdy6lMbrTqrY9jHN3irvgrwz+Pckb98oTeVdmRT+ByXh/0C9P4+xD5eKgk9JBETdeO7JFzCp8PNeFQ2TRUXXtyVsm2qE8d/eqCeShsskVFxVDn+Koc/71RP3qjZoolRcprB+o3ktfLjoBNpU9s/5NnJdnAvtP2MeJWiMhERemcYREQBERAEREAREQHIdoOBqv8AnEHdo429qjsfajV1+SfAO7sn7VI7SHx1UR/vH7/2jw03+agek9fJhapvJGX6RA90+S+cSvJXqey3UL9Dn2OxhquDiAIa1tp0aIGvcF5TxcUn04EPc0zNxlm0cDPsCq2jh2035WuzCAZtqRMWJ0JjwVHwWaRqzo8MiOIJmeFvaF73Z5V5Hk62bX0M+Qd+9PuapZ7u+O/yHhcjyUR0NPxB/eH3NUpVdOh1EaAgEkARyn2rxOJ+tL3PTw/TRL9A6D2125rdmpbWJaNeGhK6w462XJOhNJ4xrn/oOY7KZ17MiBvgTyXWzv8Ax4LSD0OfIu0Hd/45ofMoT4aL1puVczKeO47x3Kk6c+KqLr8gqM3dIhVLIF3EQqHeC8rVgxrnGcoE8TG+Aj7f3myqyyKSfAKgn+69JVsqlmiR6SVbd7PKOKr6wAd6tP3COPhPFVZZFJfvHj9i2HZ/ybOS1p7+Wm7hvWybO+SZyXbwHffsYcT3UZKIi9U4giIgCItc6SdLqOFJZBfUiS1ujQdMx3clWc4wVyLRi5OkXtsdK8NQLmGo01Bq0Xg950B7pXIdu7Y2pWrVHU8f1VMvOQNe0HLMNkWAMEeepUphulGFawNqU2VCAcxdEusZJ7JuTf8AuJs1tubOkk4SjppbvG5vE0x/K7hJ818XNu/2Z1LAkqr5RqT8TtnNbaNQjj8JA9mbgpjDYraFOkKg2nW+ENq2Y+p1lI049Yhzi2ZtlOvdumD0i2XoMFS1MRl5jd3ezvVkbb2aXScFSy9xOkVP2eFQHm08AolxOTzX2ZKwx8n90YmG23N8U6kKrnGcjjlc4mf5Z4KO6e1YpMYDrUk9+Rt/a5bJW6VbPaPi8ExruIa0/wDbyWgdIsW+vlIpPDKbSM0HL2jaTFrQFhw8bzJs2yt9E0QLu+ytOKy9o4w1Xl5ABgC0/ogNGvcFbGKHVGnluXh+bfAEZdNDr4BexbrY86lZP9Ca9qrO8O87H3BbRl4k/NtfdfmtG6J4gNrgEwHNLfHUe5bqH9qx33AEutBnl6s8l4XHxazOvE9Xg+1j9iZ6G0suIuWE5HTEiLQMrTYTN43rqjxrbfa65v0VrzVLQQRkJBiLbr95BXRzr96YJOUdTPiElPQ9kqnuiRqnhK8Pfu1WzMAT3QFjYfFF9Sswj5N4A72uYx0+ZcPBV4yv1dNzo3i0EgAkCTlBIG+VGPrtp4qvmdka6lRl1gASa7QZNhdrRzhSkCSxXqPBIu0j2G3esYAmpIME0mexziff7VjYrE0nnqmP6x5e15DXZ+rgg5nHRjbG2+THdE7RxdXL1bsLiXlrMhFIhrahG8VQ8ZWGAdxvfQg1osjYBVOaoDo0iORaDfxlYuLxWV9AatqvLZ/ke8R9BRtDGmm3JWZUzuptys9epUDQQ7M5stDrSb2DhdeV8eKvUllKo1jK1Mtc5hYHB0sGVrgCPWcIIGg3EKvLqaXoSFLarTUxFN2VvUZXEn9RzA4OPiHj+VZFR3ExaZ4n7lE4ymCceyJzUGn6VN7f+xZeABFGl2i6KbbuiT2R2junjCrNaaFol9z9bkSAZA059y2TZnyTPmrWCTMC5mbmx7z4hbPssfFM+aF1/p/ffsYcV3UZSIi9U4giIgC5iC+jia7a1OS6uXzI7THPib7uqt/KunKL29sChi2ZKzT3Oa4se35rhfw07lz8ThlkjUXqa4pqL1NQ6zDvZ8ZQBdlBJLWEzkpk+Jdn8QrVLA4TNfDUzdk9lmpqvc7wHZK1TpP6N69GtTZRxz3MqB5HWZg5uQskEss6c43DRWX+jbEtaXOxTjAJnrH8JmIG+8d7u6PPljnB02v7JnSnCWv7m7U8FgyBOGYOxTBs3/5C92/jBVl+HwYdJoMEFjiSG2ympmOv6IcPpLUqno3xPajEu/SsajtxMe9vksWr6MsW6cuJIuW3qO4hp3fs35qtN7v/ABZaor/pv2AOApBrTTpAhrW3yzLerp3nfdoWt9OOluDGHfTYGEvploaHAEy1uUiBxPsXPq3RPGtxPwd+JbJaXlwc91gRNiBeakrX24cAlxJceJ1/0WsOEhN6yutdDOWVxWxkbTw4pvytdmEAyI1IkixOhJHgrJwpNI1ZEB+SN8xmnlZUP77Ky4r0UnS1OW1Z7ReQ9hbqHBbzh8RkdmLmgGI1JFmQC0XvkeAtCBOosePfuW/bNdmoseDEsA7pMa8QCZhefx6WjfsdnByeqN56LbQD6mTKGnq5vYgTEc+xddHe8GwXLOhWHl7nl73QCO2GyDIBjKLbrdy6g4/ifeuLAlGLS8zXPrLUHyt5IBP915H2eJVoVh1wYTc0y5o3kBwDvKWea2RgUvxQFN1RuYgB1iHAktJEREi44d6jmva/FuaQ1wqYRhINwWh9SddR21lbW2lSwzM9V+VujWi7nu3NY3VzjwC13E4PFVXNxVMso4toJZRfdvwYwOqqkfpEjNI0JjvUpEmy4fC02NyMYxjD+iwBo5wFYw2Ie6S9vV3DQwwTIkk5gYcCCItaDyGtHpJj2GH7KeSN9Oq0t8LGypdt/aT7M2e2l+1Wrtjho2+pHmquD9Pui6ZtQqDOWA3gOIm8EkTHCyjNrO+LDs+YHFUYuCB8bTblBHeD4kqMZsLF1743FQ02NHDA02kfquq+u4a2EKxX6K4gB9OliGjDsPWYejljLVBzsD36uYHyY7xwUJRT3LW/ImwycVXG52GpfWxA+1Wth1C7C4d2uagzndjSQvej3whxfVxbGU6joa1lM5g1jMxGZ28lzneACq2ZQNKjSYbZaYaeIhonyNlSfkWiX3VIMgzuANrc+a2nZZmiw/shao90k3MW03mBpOht7FtWyfkafzQur9P779jHiu6jLREXrHCEREARWMbjKdJhqVXtpsaJLnENaOZK0zanpOwtNpcwFzBbrHSxrjwpiC6oeQUWKMzpmfyjC/Nrf+FXsYfiX/M/7SuYdLfSJUxVKWMbhww9iq5k1ZJEim2YEgXBmRw1UbhOl+Ie0s/2q24gh+GpiREcQRaVwZl23L8/g6IK0kdcqvtU/n95V5r4a/8Aen65XC8T03xnaHw1hBLpPUsHrST+lYdrwjuWRX6cYrq5O0WDM6cowzMxMz+txJVHjfn/AL/BNF/p1tmpTx7urcGuDC0mAbHqzF/mrSHjVY+I2uXVX1Kk1nOPrHsyN9hpuiOCts2g06iPaF2YsXIqMsk+ZmftHGGs/OQAYaLT+iA0a9wVn4QOqLMvaLw4OtpEZeNzfwVzaFJrHQx2dpaDIjUiSLEi0x4Ky7DHqjVkZQ8Mi8yRmHdFirLl5V5Ea2yxRIzNzXbmGbvE39i3DYGIzYdwYJDajobvNOZjyPsWjl5JAGpMDmr2B2hUoOJaSDNxy+1ZcTg6WNLc0wZejlZ3DoPUl5GYO7JuAR+kNeJ1vv1XSiL6HvXGvRhtRlfEOOlQ0+1yBHkLj8XPZDBtfVeXHG8dp+Z1ZJqTtA+P3KL6QbFZiWta59Sm9js1OrSOV7SbGDvBGoUm48THEfcvAb8z5K109ChA7I6LUaD+tc+pXrbqtd2dzR+wNG+9TL3Ce+IudB+D7lYxmF6wa5Za5p3yCHC4PAuBBEHUaFevYc7X20II11LD7me1Q3erZKRU+q2C7MIgnUQAN8/jVRm2Ni4fEwazc2UFnrFoh5bYwdZDY74WQ3CEBgkS1uX1bFsQRE7yGn+VDhRkyZjF44j9WPm2jkFS62NKLxqjWRAOXxnLHnZUvqAamDYW1vpI74Vv4P2SJN359Ivn6zymy8OFkgyZ1Ol4Mtm2648Sq6Fiqm+QC2IgHXXePYrZM8LyTInTdyC8ZTytDQdA3LPcI3ABePPcCJMTYf6qjLItveLbjE6Ejhz/ALrbdlH4lnzQtTzkxk11JInw/HBbXso/E0/mhd/6d337HNxXdRloiL1jhCgOmXSuhs6ga1Y30Ywes924AKfXyt0/2+/aG0HOeYosJFJvCmCe0e90T4hAX+kPS6tjD8JxhmmDNLDgwzunjxLj4LWBiqmJq5qjpgGws1o4NG4LYcbsKaYqVGmcsgXho1046LVsPIo1HDuk9xIHtJhULlzE7SeSACMrbNBANvLerDcULgsb/LI98q5s7ZtSs4BrTGpdFh9/JVV9lPa8gBxu0C2pcD9xUUi2xZFcfqDvv+O/zVeFaKjg1rQHSLk28lbqUi0lrgQRuKycDhXsy14MZwNN3H2R4qGtHRatVZj4t5EiGiLWaB7dfaselQzEAb9Pu81KbSp9Y9zqYLmngCdRKwsI0yWmxHaHcRrPC3tASDfJZEormossc5ht4hV18SSIBIGsd6lcdhOtex9MiXjtDcHAdoclEY/DGm9zHCCD7NQrQlzKyk406LIdGi8LzM+K8CFXKGxdC9tVMLWfUpZcxpFtxMSW3HsXYNh+lNjobi6RZ/zKd28ywmR4E8lxjorhBUfWl0ZKD6gFu0WlvZue+TqYBUm50kTPKLeJWGTFGb1NYSaPpDZm0qNduehVbVbvym4+cNRyKyPweC+aMLi303B1J7qbxo5pLT4Heuq4bp51GFw76lQYmo+BVbmY2rTBBM9kQ6YFiLTBMriy8M4902jkvc6B5+HBUE+zzhQuwuluExVqNaHn/dv7D/AGzv5SVMPdx1G9ckouOjNk7KXFUE8/vXpVP9lmzRHvv3Lwidw7tRbwVJ8T7vFYe19p0aDOsxFRtNu6SZPc1ou49wCha6IkyHHXy7hw58VE7e29h8I3NiKgBNwwXe7SIZ9ptdaRtn0nEva3DUyykHDO8wajmgyQ0HsskWvOu5aR0k2p8JxD64Zkzx2ZDspDQDBgSLc12YuDk329jCedJdknekfpBxGIllH8npbwD8Y4ftP3ch5ld29HxnZmC/hqX1Avlgr6m9Hv5rwP8LS+oF6mPHGCqKOOc3J2zYURFoUKX6HkvjSfjnjg2PKF9mO0XxkG/lFYd7/eVDJRt+2dqObTiSZEBvE/2CjNmdH3ChUbUcGGplIHrEZSTcDSZ0lZE5q4/YZI+dYz7R9ELOc45ZVS+5Rs/A1KbQKeKyjh1Ij3yruJfUphrzkqlr85DOy4gNcLMd3uGh8FeOHexrSRZwBB3GQDrxgi3erdU3BVPE08DWts7SGKc3K3K4TYx2p4Eb+4qQwm0HGlSaQLOZNuBAgrF2lgWjrCBBblqWtLXHK4eBg+Kv4kAZXDeWk/ODrnxgHmSpREmZHQ2vkp2AMuPsMKH2u/8pc616b2/wBLlJ9G2ZabfPzMqK2v8oeT/qlTHcrIsbEqEVGkcDHOB/oqOktcvrEnXKPcqNjn4wcvsVja5+Nd4D2BWRSRhIiKxUztkeufm/aFsBO8eP44qL6L43qnVuzPWUHU9Yy5i3taGdIjgSpLiRYe9Ve5ZB3A+Hej8O8CS1waYuQQLiRfS4EjuleOvafDcOamNp9IX1sNRwrmtDKEZDLi4mCDmkwZJ4WiAqtvwLEGTw3e/uW09G+mmOouZSY44gOMCk+XHkx3rA8Bcdy1Rx7zPu5KrBYp1Koyo2MzHBwJAIzC4Mb4MHwVZwUlTRKbTO07O6d4d7uqxAdhK1pZVs24BHb0FiLOgrY8XjadOn1lSoxlMXzFwAPI7/BfOu0ce+vUdVqGXvgudAEwA2YaIkxeFYdUJaGkktGgJJaJ1IG5cb4FPxo2Wdo67tnpxUdQq1cDTaaVM5X16hAynswGUjczmsTwNlynaOPq13l9Wo6o873GT4cB3BVUto1WU3Um1HCm4nMwGGuJj1hvs0coWEQunFhWPYznkcjIwGHNSoymDGd7WzBN3EAaXNyru3NlvwtZ1F5DnMjMWzl7QDoBOoExO9YbXkEOaYIOosfAjRUPcTcmY4+7w0WtO/QztUUk+9fVHo9/NeB/haX1AvlcL6o9Hv5rwP8AC0vqBXRU2FERSQeFfG9Ufldcft1PeV9kFfHGK/zmI/eVfrOUMEzgXTVfAJJDYA10AiOK3DB0aXwP4yWjOx01A8NznrmkfFguyxTH8zdwWo9F8SwYgtqF4FQCmDTjOHSC0tBIBOZgESNdVvLHPpMNGngqlSmdRVdL3wDLppmaZGcQGnR75zZrY5H4GsTKwmIwwYxpdWAIhhynI45WteYJktt6tyCSBJVDMNRFIZMtRp60tlrrTh6omXQSc1GZgQdFRSr0qdMubgKlOqyHsY52IqU8tznJzNygDMbggwb6rFqbZqdU5vwHK4AnPTa9gYerc0Oe0AtyinV0tqCSZvlT8C5qvTOi2niK7GSGCk4AG9paRffqtew9Ymkwd596lelWN62rUfEZqMRyyN+yfFQeEHZYO8+4reOxVs2HY4ysaCd0KI2xq49zll4OoYHcsHarpzcj9imJWZibHPbHj7gsfah+Nfz+xX9kCHz3H7FiY10vdzV0UZYREUkEx0awJquqwQOrouqGxMhpbYRvMi+gUmXTaY7t6gtkVCHmCR2SLGJBIkclNl0Kr3LI9zcNd6mtq7AFLCUcSK2Z1WB1cAGnIcZd2iTmyy2wtKgi7vuFbzk/jTiqtMsC4eKv7KpU31qbKji2m54D3EhuVp1cCQRYX03QrBO4bvxC8psLnAAOc5xsACSeQAvyCPYgy9uUaNOu9tB5qUhGR8glwytJJsIMzaLablgg9y9rUnNOVzXNdYw4FpgiRY3Egg+Kp9qJaB7k3gH4QYSqKgnFFx6ow8gDsTmgxJ7UGDF53KD9yzKGyaz6T67WTSpmHvloDTaxBMycwi1/BYRURS11DMjZ1UMrU3vEta9rnAAGWggkQ6xkWvxV/pBjmVqzqlKmKTCGhtMAQyGgQMoAi3tWLg6BqVGUwQC94aCZiXGBMAnUq9tvZj8NWdRqFpeyM2WYBIDoBIExMSmnN6jWjBX1T6PfzXgf4Wl9QL5ULl9V+jz814H+FpfUC0RQ2FERSDwr44xv+dxH7yr9Zy+yCvjzGM/LcT+8q/WcoYMbEEtgtJlrg6RY8bEaROq2LZnSTE5fl6kg73mVC1QC0GLi/PSxVuhiwBcHwuqtWXTNvp9JsRc9c+XCHSQZAmxBtHad5lW6/SjFZcnWnLGXKWsIiIj1eEDwC1xmNZ+sqK2Pbuuqcq8i96Hm0KlyP2Y9v+is0P0eZ9zlivqEnMd/H7AsjCukt5n3FWIZJYNYO0BIce77QpDCmywNo+o7kPeFKIkzGwlPKfWBsdN0xZYOJ9d3NZWzz9v2LDreseZVkUZS4QkLxeypIJbo9iGMdW6xs5qDmsMA5Xkth3a03iRcTIWfSpvPqtJ5An3BWuhuNxFKrUq0C0Op0XOcXAEZAWkwDqZygBbU70i7SItXA5U6fslqxk5X2V8/waRqtSCGzcQYihVPKk8n2Cy2PaPwqthKGGbga4NKCanVvmpAcIcMg0zQ25gW3rAf092lqcU/kG0x7mrO2ptPadPC0MU7G1CysYaAXNdo4nNYAQW2jWZFgs5c+l18l1ykS3orjzpha30MseazNl9E9o0qtOqMI4uY8PGZzAJaZE9sGJHcoat0hxZ1xVfl1tT715gMTUrV6bH4irDnhrndY7sgm7jmMW15BS+krWvkhct+Jsu0+iG0sTWfWqUGMfUgu7bAJADZjMYmJhYzvR5ixZz8M351cDzgLXtt4VtOu9jKhrNblioIcHS1plsEgAkmL+1YDMMderdYx6pgHW9rGLwoip8qqSr2/kluN7fJvlDo3iKVF9A7QwNOk8y9vWg5jbWWTbKIvbdvWB/hPDD1tqYQfNl3hYqPwOAo/BaxrMqDE5ooiKgaQQzUARNzlk6m+5QmIovp+u0tkkXtdtj5SFEYybdS+EG0lt8m2s2HgGODv9qgEGZp0Kkg7iCDYqirhNlm9TH4qoRvFE7tBLwbAWC1bA12tq03PbLQ9pc2A6WggkZTYyJF1e27jqdWs59GmKVMgZWQOzAAItrcEzrdT0cuauZ/H4I51Wy+SeI2O39LHP8ACk2fcvoroW6mcBhDSDhT6inkDozBuUZQ6N8QvkguX1h6PPzXgf4Wl9QLaEOXxb9ykpX4GwoiLQoF8hYsfl2I/fVfrOX16vkLFf53En/nVfruUMk8LZDR3fYozAMkO5fepaQInh9ijNlaOQGUaIFMvO7dCootzZDYX94KzsYwfBX+B9oUds+oIb84Dya5AWdq0SHC+5e4KkZYJ3OPsKp2xWmpHAKvZVQF45O9xQErhKBg3WLtejFNxnh71KYJkg3iFg7b+SdzHvQEVsxl3clgVNTzWds2sM8cWkJsvY9fFVHMw9J9V7Wl5awS7KCATG+7h5qSCPRZeO2bWomK1GpSPCoxzD/UAsRAZ2ycQ5jnZXFuZhY6N7XES08QVIFYmwzSBq9br1Lur9b5WW5Zy9062mJWRmVXuWR7K2EdHqjm3rNtIAM5SWy1tyYA3DhJG5a74eO/yU3tTaeHfhKFGnRyVmEGpVysHWdlw1F7SBfXU3hZzvSi0a8S3itisptqE1mktjLAs8QCDroTLR3tKvbMxQ6lomjIziHuIs4iYaBY5bZpsCTuUA48vxxV3Zm0RRrU6tiabw6MxaDF4JGg4jhKOLaJTSZOfDGtqOeKlNsta4AZ3Ntn4RmnrHGIjTxxqW0gx7stcNDjnkUS4AmARB3Q32+Ubtnanwmu+sQA+oR2WyQCGhthqBaw3Kmls2u71aNZ3zabzPkFCx6ahz10J1ld72Oqh1V9OmTJbTaKbT2TfNYOBLCJvwm6isVtBr6jHPL6jGkzmaySOAAgHQb1IYHZm0+pfQp4TE9XUMvHwZ5zERBzObNstoO88Uo9Adpu0wNfxAb9YhI46eolMjMI+m4tpCmJeG08ziJzEuGeY7MlzOMBqvdI2upv+DuYGvYQXZXAgEtBDbMGgMTfxiVNYb0Z7YkFuDe0ggg9bRaQeI+MkLPPoj2vUMvZTni+uHGBoJE2AVuTtWV5tDni+tPR5+a8D/C0vqBcWp+hHaR1fhG86lQ+6ku7dF9muw2Dw+HeQXUqLKbi2cpLWgEiYMWWiKEoiIpAXLduehmlVrVa9DEvpOquc8tcwVGhzyScsFpAknWV1JEBwjF+hbHD5PEYZ/PrKf2OUG30QbVpAgUqVSf1KrR9fKvpNEB801vR7tTq3NOCqaaB9Ez9GoVGv6B7SaGAYCvYyeyDuPA96+qEQHyRiegW1HOJ+AYj6BV3AdANptfJwNfQ/o8QRvK+skQHzVgug21I/wAjV8XUh9aoFlVfRVtSs0t6llKY+Uqs/wDGXL6LRAfPuzfQLiyQauKoU/mB9T35V0v0e+jahstz6jaj61Z7che4BoDZBIa0aSQCZJ9ULd0QFNRgcIcAQdxEjyUBtHoNs2vJqYKgSdSGBjvpMgrYUQHOcR6FdlOMtbWp9zKpI/rDirtH0N7Lbqys7nWePqwugogNLo+irZLf+Fn51Wsfe9ZtP0ebLH/A0D85ub6xK2dEBB0Oh2z2ergcKP8AoU//AFWfS2Rh2+rQot5U2D3BZqIChlNo0AHIQq0RAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q=='
          : i === 14
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHE0P04jqOu1Y6bDEkLDDhdWLqmInY1oLZQA&s'
          : i === 15
            ? 'https://cdn.awsli.com.br/600x450/2639/2639447/produto/249912706/attar-al-wesal---2-9ykkk24fd6.png'
          : i === 16
            ? 'https://cdn.awsli.com.br/600x1000/2429/2429224/produto/218359237/gold---silver-3d-40k-thank-you-followers-instagram-post111-vtj1l4zy59.png'
          : i === 17
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PBj_gbUqeFig6uK8rAGONu5m-hHjlDx1YA&s'
          : i === 18
            ? 'https://m.media-amazon.com/images/I/61lGoCRdU7L.jpg'
          : i === 19
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWLmYA3EpC3YdINehq7RegVrOI5JH3WdRuA&s'
          : i === 20
            ? 'https://images.tcdn.com.br/img/img_prod/1101389/perfume_arabe_feminino_roses_vanilla_eau_de_parfum_al_wataniah_100ml_383_1_242b57ab3376f27f59c7a778a6110fa1.jpeg'
          : i === 21
            ? 'https://acdn-us.mitiendanube.com/stores/001/066/168/products/lattafa-najdia-attar-oleo-perfumado-para-homens_-1-fb33401d4f69e3c02717059482408791-640-0.webp'
          : i === 22
            ? 'https://cdn.awsli.com.br/600x450/2627/2627445/produto/302791412/24f7857325cf468144e6f37af228744c-z467iqowdq.jpg'
          : i === 23
            ? 'https://cdn.awsli.com.br/278/278816/arquivos/haya.jpeg'
          : i === 24
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKptLA659rDBDrX4IyptETz950ro9ZDYeQw&s'
          : i === 25
            ? 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F11611173.webp&w=3840&q=40'
          : i === 26
            ? 'https://acdn-us.mitiendanube.com/stores/002/174/962/products/a855b6a3b34ae018df4e84beed819416-975a910aebe27d272116638876275990-480-0.webp'
          : i === 27
            ? 'https://acdn-us.mitiendanube.com/stores/006/388/789/products/3c91cd402727e1e93e48c0e4f69e7a58-8fa9ec7e59354ef04017543418890284-480-0.webp'
          : i === 28
            ? 'https://images.tcdn.com.br/img/img_prod/1361374/bint_hooran_rosa_ard_al_zaafaran_perfume_arabe_feminino_floral_oriental_com_toque_doce_e_sofisticado_1791_2_e1b9d6b8a67041d02f22eabe71d5352f.png'
          : i === 29
            ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkeKIHnWHidM2XbxGPZJGSI5bGcNKKNLOng&s'
        : `https://picsum.photos/300/300?random=${i + 1}`,
}));

const grid = document.getElementById("productGrid");

produtos.forEach((p) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.imagem}" alt="${p.nome}" />
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <div class="price">R$ ${p.preco}</div>
    <button onclick="adicionarAoCarrinho('${p.nome}', ${p.preco})">Adicionar</button>
  `;
  grid.appendChild(card);
});

// Carrinho simples
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
  alert(`${nome} adicionado ao carrinho!`);
}

// Atualizar contador do carrinho
function atualizarCarrinho() {
  const cartBtn = document.getElementById("cartBtn");
  const total = carrinho.length;
  cartBtn.textContent = total > 0 ? `🛒 (${total})` : "🛒";
}

// Menu mobile responsivo
function criarMenuMobile() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  
  // Criar botão hamburger se não existir
  if (!document.querySelector('.hamburger')) {
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
      display: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: white;
    `;
    
    // Inserir hamburger antes das actions
    const actions = document.querySelector('.actions');
    header.insertBefore(hamburger, actions);
    
    // Toggle menu mobile
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
    });
  }
}

// Função para ajustar layout responsivo
function ajustarLayoutResponsivo() {
  const width = window.innerWidth;
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (width <= 768) {
    // Mobile
    if (hamburger) hamburger.style.display = 'block';
    if (nav && !nav.classList.contains('mobile-nav')) {
      nav.classList.add('mobile-nav');
    }
  } else {
    // Desktop
    if (hamburger) hamburger.style.display = 'none';
    if (nav) {
      nav.classList.remove('mobile-active', 'mobile-nav');
    }
  }
}

// Lazy loading para imagens
function implementarLazyLoading() {
  const images = document.querySelectorAll('.card img');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    img.classList.add('lazy');
    imageObserver.observe(img);
  });
}

// Otimização de scroll para WhatsApp button
function otimizarWhatsAppButton() {
  const whatsappBtn = document.querySelector('.whatsapp');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      whatsappBtn.style.transform = 'translateY(100px)';
    } else {
      // Scrolling up
      whatsappBtn.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  }, { passive: true });
}

// Simulação de login com Google (OAuth)
document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Login com Google ainda em integração!");
});

// Inicializar funcionalidades quando DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  criarMenuMobile();
  ajustarLayoutResponsivo();
  implementarLazyLoading();
  otimizarWhatsAppButton();
  atualizarCarrinho();
});

// Listener para resize da janela
window.addEventListener('resize', () => {
  ajustarLayoutResponsivo();
});

// Smooth scroll para botão CTA
document.addEventListener('DOMContentLoaded', () => {
  const ctaBtn = document.querySelector('.cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      document.querySelector('.products').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

// Performance: Debounce para resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplicar debounce no resize
window.addEventListener('resize', debounce(ajustarLayoutResponsivo, 250));
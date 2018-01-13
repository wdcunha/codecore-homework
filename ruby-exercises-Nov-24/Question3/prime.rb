# Question 3
# Write a Ruby method called: is_prime. The function must take a number n and it should return true or false whether the
# argument passed (n) is a prime number or not. A prime number is a number that is divisible only by 1 and itself.

print "Type a number:"
n = gets.to_i

def is_prime(n)
  message = ''

  for i in 2..(n-1)
    if n%i == 0
      return false
    end
  end
  return true
end

puts "Your number #{n} is #{is_prime(n)} for primes"

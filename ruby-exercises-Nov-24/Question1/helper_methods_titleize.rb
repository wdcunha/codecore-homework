# Question 1
# Implement the following code in Ruby: Create a module called HelperMethods that include a method called titleize
# that does the following: it takes in a string and returns the string back after capitalizing each word in that string.
# For example, if you pass to the method a string "hello world" you should get back "Hello World". The methods should not
# capitalize the following words: in, the, of, and, or, from. Then write a piece of code to demonstrate the difference
# between include and extend in using Ruby modules with classes to include methods. Make sure to demonstrate calling the
# titleize methods with your code.
module HelperMethods

  def titleize(x)
    x.split(' ').map { |e| e.capitalize }.join(' ')
  end

  def titlieze_turbo(title)
    stop_words = %w(in the of and or from to)
    title.capitalize.split.map { |w| stop_words.include?(w) ? w : w.capitalize }.join(' ')
  end


end

# u      = User.new
# u.name = "tam"
# puts u.name_display
# c      = Car.new
# c.name = "toyota"
# puts c.name_display

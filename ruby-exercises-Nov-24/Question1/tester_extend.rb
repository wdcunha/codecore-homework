require './helper_methods_titleize.rb'

class TesterExtend
  attr_accessor :str
  extend HelperMethods

  def initialize
    @str = "HELLO WORD"
  end


end




# word.titleize
#
# b = Bird.new("B","yellow")
# c = Cat.new("Tom","gray")
# c.catch(b)
# c.random_number("Tom","B")
# c.hundred_times
#
# u      = User.new
# u.name = "tam"
# puts u.name_display
# c      = Car.new
# c.name = "toyota"
# puts c.name_display

# b1 = Bird.new "B"
# c1 = Cat.new "C"
# c1.catch b1
#
# for i in 1..100
#   bi = Bird.new "B#{i}"
#   ci = Cat.new "C#{i}"
#   ci.catch bi
# end

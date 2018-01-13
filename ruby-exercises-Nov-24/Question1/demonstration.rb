require './tester_include.rb'
require './tester_extend.rb'

# Testing module using Include

a = TesterInclude.new

p a.titleize(a.str)

a.str = "Now testing capitalizing of a bigger text to see how it behave in titleize method named with titlieze_turbo"

p a.titlieze_turbo(a.str)

# Testing module using Extend

TesterExtend.new

p TesterExtend.titleize(TesterExtend.str)

p TesterExtend.titleize("new test, but now using extend")

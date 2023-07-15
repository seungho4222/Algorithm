import sys

print("sys.argv => {0} {1}".format(type(sys.argv), sys.argv))

for i, val in enumerate(sys.argv):
    print("sys.argv[{0}] => {1}".format(i, val))

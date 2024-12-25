---
title: "初赛笔记4——数据结构与算法基础"
date: 2020-10-04
layout: "post.njk"
description: ""
---

# 数据结构与算法基础

## 时间/空间复杂度

算法的复杂度是用来表示算法性能的一个极其重要的指标，一旦输入规模足够大，更优的复杂度一定会存在巨大的优势。所以我们学习算法之前需要先对复杂度有一个清楚的认知。

### 渐进记号

![](https://cdn.luogu.com.cn/upload/image_hosting/l2giqshu.png)

### 复杂度

算法的复杂度分为算法的时间复杂度和空间复杂度。在介绍时间复杂度之前，我们需要引入 **时间频度** 的概念。时间频度是指算法中语句的执行次数，用 $T(n)$ 来表示，$n$ 为问题的规模。

#### 时间复杂度

在算法竞赛中，一般为了理解方便，只用 $\mathcal{O}$ 记号表示复杂度。简单来说，用时间频度的表达方法不够简洁，于是引入了时间复杂度的概念。如果有一个辅助函数 $f(n)$，在 $n$ 趋向于无穷大时，$T(n)/f(n)$ 的极限值为不等于 $0$ 的常数，则我们近似的将 $f(n)$ 替代 $T(n)$，记为 $T(n)=\mathcal{O}(f(n))$，称为算法的渐进时间复杂度。

时间复杂度只关心算法中最耗时的部分，舍去常数部分，通常用简单的函数来表示。例如，某算法时间频度 $T(n)=2n^3+4n^2+n$，则它的时间复杂度为 $O(n^3)$。按效率从高到低排列，时间复杂度一般有以下几种：

![](http://res.jisuanke.com/img/upload/7804b7f1d4936f5804e3e8f9e1c5be5fb57534ae.png)

#### 空间复杂度

算法的空间复杂度是指运行该算法所占用的存储空间大小，记为 $S(n)$。和时间复杂度类似，通常也是取它的渐进空间复杂度，用一个直观的函数来表示。通过空间复杂度，我们可以预估出算法运行所需的存储空间，包括指令空间、数据空间、动态申请的内存空间等。

### 时间复杂度举例

在竞赛中，我们认为计算机一秒能执行 $5×10^8$ 次基本计算，如果题目给出的时间限制为 $1$ 秒，那么你选择的算法执行的计算次数最多应该在 $10^8$ 量级才有可能解决这个题目。

一般 $\mathcal{O}(n)$ 的算法能解决的数据范围在 $n \le 10^8$。

$\mathcal{O}(n \log n)$ 的算法能解决的数据范围在 $n \le 10^6$。

$\mathcal{O}(n \sqrt{n})$ 的算法能解决的数据范围在 $n \le 10^5$。

$\mathcal{O}(n^2)$ 的算法能解决的数据范围在 $n \le 5000$。

$\mathcal{O}(n^3)$ 的算法能解决的数据范围在 $n \le 300$。

$\mathcal{O}(2^n)$ 的算法能解决的数据范围在 $n \le 25$。

$\mathcal{O}(n!)$ 的算法能解决的数据范围在 $n \le 11$。

以上范围仅供参考，实际中还要考虑每种算法的常数。

## 指针

### 指针的创建

在 C++ 中，指针（pointer）是指向另外一种类型的复合类型，其值为某个地址，可以用指针实现对其它对象的间接访问。

要创建一个指针变量，首先需要声明其类型，例如：

```cpp
int *ptr;
```

这里的`*`表示`ptr`是一个指针，我们称`ptr`的类型为`int*`，即`ptr`为指向`int`型变量的指针。

此时该指针还没被初始化，被称为野指针，还不能用来访问指向的对象。

### 指针初始化

地址运算符&，可以用来获取变量的地址，例如：

```cpp
int x = 10;
int *ptr = &x;
```

此时，`ptr`指向了`x`，那么如何用指针获得`x`的值呢？

这就要用到解引用运算符`*`，又称间接运算符。虽然长的和乘号`*`一模一样，但完全是两个不同的运算符，解引用运算符是单目运算符，且优先级更高。

那么下面的代码就能输出`ptr`指向的内容了：

```cpp
cout << *ptr << endl;  // 输出的是指针指向位置的值
```

应该得到的就是`x`的值 $10$。

如果你把`*`去掉来输出，也能得到一个值，这是变量`ptr`本身的值，也就是指向的内存地址。这个值为十六进制，比如`0x7ffee2234a5c`。

```cpp
cout << ptr << endl;  // 输出指针变量里保存的值。此处为变量 x 的内存地址
```

### 指针的修改

同样，我们可以通过指针来修改指向的变量的内容。

```cpp
int x = 10;
int *ptr = &x;
cout << x << endl;  // 10
*ptr = 20;
cout << x << endl;  // 20
*ptr = *ptr * *ptr;
cout << x << endl;  // 400
```

可以发现`*ptr`和`x`的作用是相同的。指针就相当于保存了某个变量的门牌号，利用这个门牌号，就可以对某个变量进行各类操作。

### 辨析

一个容易错的地方：

```cpp
int *p1, p2;
```

上面的语句定义了两个变量，但他们的类型不同。`p1`的类型`int*`，而`p2`的类型是`int`。也就是说开头的`int*`声明方式只对`p1`有效，而`p2`不受前面`*`的影响。

如果你的目的是定义两个指针，那么应该这样写：

```cpp
int *p1, *p2;
```

上面的代码定义了两个指向`int`类型变量的指针`p1`和`p2`。

### 二级指针

指针可以指向普通的变量，也可以指向一个指针变量。指向指针的指针称为二级指针（指针的指针），而之前讲的指针都是一级指针。

```cpp
int x = 100, y = 50;
int *p1 = &x;
int **p2 = &p1;
```

简单来说，定义的时候有几个`*`就是几级指针。上面的例子中，`p1`的值是`x`的地址，而`p2`的值是`p1`的地址。如下图所示，黑框中是变量的值，下面是变量名。

![](https://res.jisuanke.com/img/upload/20190227/aaee7d6a1806fb69e1576f83a5c3f6e571dd7856.png)

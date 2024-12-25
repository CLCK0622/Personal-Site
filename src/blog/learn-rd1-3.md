---
title: "初赛笔记3——计数与概率基础"
date: 2020-10-03
layout: "post.njk"
description: ""
---

# 计数与概率

## 集合

集合是数学中的一个基本概念，通俗地理解，集合是由一些不重复的数据组成的。比如 $\{1,2,3\}$ 就是一个有 $1,2,3$ 三个元素的集合。

### 集合的特性

- 确定性

给定一个集合，任给一个元素，该元素或者属于或者不属于该集合，二者必居其一，不允许有模棱两可的情况出现。

- 互异性

一个集合中，任何两个元素都认为是不相同的，即每个元素只能出现一次。

- 无序性

一个集合中，每个元素的地位都是相同的，元素之间是无序的。集合上可以定义序关系，定义了序关系后，元素之间就可以按照序关系排序。但就集合本身的特性而言，元素之间没有必然的序。

### 集合和元素的关系

只有 $a \in S$ 和 $ a \notin S$ 两种，分别表示被包含与不被包含。

### 集合和集合的关系

#### 子集与真子集

设 $S,T$ 是两个集合，如果 $S$ 的所有元素都属于 $T$ ，则称 $S$ 是 $T$ 的子集，记为 $S⊆T$ ，显然当 $S,T$ 两个集合相等的时候这个关系也成立，而如果两集合不等而 $S$ 又是 $T$ 的子集，则称 $S$ 是 $T$ 的真子集，记为 $S⊂T$。

### 集合的其他概念

- 空集

有一类特殊的集合，它不包含任何元素，称之为空集，记为 $\emptyset$。空集是绝对唯一的，空集是空集的子集，空集是除空集以外所有集合的真子集。

- 全集

在一个相对固定的范围内所有元素的集合叫做全集。比如在立体几何中，全集是由空间的全体点组成的集合。

- 交并集

交集定义：由既属于 $A$ 且属于 $B$ 的元素组成的集合，记作 $A \cap B$。

并集定义：由所有属于集合 $A$ 或属于集合 $B$ 的元素所组成的集合，记作 $A \cup B$。注意并集越并越大，交集越交越小。

![](https://res.jisuanke.com/img/upload/20190929/b3af1bb3599459e6aeedaaeb514f4d09c0427096.png)

- 差集（也叫相对补集）

差集定义：设 $S$ 是一个集合，$A$ 是 $S$ 的一个子集，由 $S$ 中所有不属于 $A$ 的元素组成的集合，叫做子集 $A$ 在 $S$ 中的差集，记作 $S-A$。

- 绝对补集

补集定义：设 $E$ 是全集，$E-A$ 就是 $A$ 的补集，一般记作 $∼A$。

![](https://res.jisuanke.com/img/upload/20190929/cb22da1853bba72a13c59b9efe7290d65b9c172b.png)

## 计数基本原理

### 加法原理

假定 $x_1,x_2,x_3,⋯ ,x_t$ 均为集合，第 $i$ 个集合有 $n_i$ 个元素，若 $\{x_1,x_2,⋯ ,x_t\}$ 为**两两不相交的集合**，则可以从 $x_1,x_2,x_3,⋯ ,x_t$ 选出的元素个数共有

$$n_1+n_2+⋯+n_t$$

### 乘法原理

如果一些工作需要 $t$ 步完成，第一步有 $n_1$ 种不同的选择，第二步有 $n_2$ 种不同的选择，……，第 $t$ 步有 $n_t$ 种不同的选择（**每一步选择独立**），那么总的选择方案数为

$$n1×n2×⋯×nt$$

### 排列数

设 $S$ 为 $n$ 元集合，从 $S$ 中有序选取 $r$ 个元素称为 $S$ 的一个 $r$ 排列。

$S$ 的 $r$ 排列总数记作 $A_n^r$，当 $n=r$ 时称为全排列。$A_n^r$ 也称为从 $n$ 个不同的元素取 $r$ 个元素的排列数。

从 $n$ 个不同的元素取 $r$ 个元素按顺便排成一列，选择第 $1$ 个元素可以有 $n$ 种方法，选择第 $2$ 个元素可以有 $n-1$ 种方法，以此类推。所以 $A_n^r$ 的计算方法如下：

$A_n^r=n(n-1)(n-2)...(n-r+1)$

如果 $n$ 和 $r$ 都是整数，且 $0 \le r \le n$，则有：

$$A_n^r=\dfrac{n!}{(n-r)!}$$


若 $r > n$，则 $A_n^r = 0$。

### 组合数

设 $S$ 为 $n$ 元集合，从 $S$ 中无序选取 $r$ 个元素，称作 $S$ 的一个 $r$ 组合。

$S$ 的 $r$ 组合总数记作 $C_n^r$，也称为从 $n$ 个不同的元素取 $r$ 个元素的组合数，也可以记作 $\tbinom{n}{r}$，称为二项式系数。

如果 $n$ 和 $r$ 都是整数，且 $0≤r≤n$，则有：

$$C_n^r = \frac{n!}{r!(n-r)!}$$

若 $r > n$，则 $C_n^r = 0$。

### 帕斯卡恒等式

是组合数中非常重要的公式：

$$C_n^k=C_{n-1}^{k-1}+C_{n-1}^k$$

可以用组合分析的方法证明：

从 $n$ 个元素中取 $k$ 个一共有 $C_n^k$ 种取法，现在换一种角度来考虑：对于其中一个元素，如果取它，那么剩余的 $n-1$ 个元素里就要取 $k-1$ 个；如果不取它，那么剩余 $n-1$ 个元素里就要取 $k$ 个。那么总共的取法一共有 $C_{n-1}^{k-1}+C_{n-1}^k$ 种。

## 鸽巢原理

### 鸽巢原理

又称为抽屉原理。其最简单的形式如下：

如果 $n+1$ 个物体被放进 $n$ 个盒子，那么至少有一个盒子包含两个或者两个以上的物体。

### Ramsey 定理

在 $6$ 个人中，总有 $3$ 个人相互认识，或者互相都不认识。

## 二项式定理

### 二项式系数

二项式系数其实就是一个组合数，可以用 $C_n^k$ 表示，一般记作 $\tbinom{n}{k}$，读作"$n$ 选取 $k$"。

### 帕斯卡三角形

也叫杨辉三角，形式如下图。

![](https://res.jisuanke.com/img/upload/20200912/6f9643f7ba5314bf6ae02d74c8255ae93bd70981.png)

第 $n$ 行第 $k$ 个数其实就是 $C_n^k$。

### 二项式定理

设 $n$ 是正整数，对任何 $x$ 和 $y$，

$$(x + y)^n = \sum\limits_{k = 0} ^ n C_n^k x^k y^{n-k} $$

其实就是两个数和 $n$ 次方的展开，其中每一项的系数都是一个二次项系数。

在二项式定理中，令 $y=1$，可以得到：

$$(x + 1)^n = \sum\limits_{k = 0}^n C_n^k x^k$$

令 $x=y=1$，可以得到：

$$2^n = \sum\limits_{k = 0}^n C_n^k$$

令 $x=1,y=-1$，可以得到：

$$0 = \sum\limits_{k = 0}^n (-1)^k C_n^k$$

把上式移项，可以得到：

$$C_n^0 + C_n^2 + ... = C_n^1 + C_n^3 + ... = 2^{n - 1}$$

也就是说，一个包含 $n$ 个元素的子集中，元素个数为奇数的子集个数和元素个数为偶数的子集个数是相等的，都为 $2^{n-1}$ 个。

可以这么想：对每个元素有 $2$ 种决策，取或者不取，这样一共会有 $2^n$ 个子集。现在我们要得到元素个数为奇数（偶数同理）的子集，前 $n-1$ 次抉择都可以随便选，而第 $n$ 次决策要根据当前已经取出的元素个数来决定（已经取了偶数个就再取一个，已经是奇数个了就不取），只有一种抉择，因此元素个数为奇数的子集就有 $2^{n-1}$ 个。

## 计算组合数

如何计算一个组合数？最直观的方案是用组合数的公式：

$$$$

参考代码如下：

```cpp
int com(int n, int m) {
    int res = 1;
    for (int i = n; i >= n - m + 1; i--) {
        res = res * i;
    }
    for (int i = 1; i <= m; i++) {
        res = res / i;
    }
    return res;
}
```

这样计算的弊端是一来数据会很大，二来每计算一次复杂度很比较高，比较麻烦，三来对于一般的题目会对它有一个取模的要求，而除法其实是不太好取模的。

我们在程序中预处理组合数一般利用帕斯卡恒等式。

$$$$

参考代码如下：

```cpp
const int mod = 1e9 + 7;
int c[1005][1005];
void init(int n, int m) {
    for (int i = 0; i <= n; i++) {
        c[i][0] = 1;
        for (int j = 1; j <= i && j <= m; j++) {
            c[i][j] = (c[i - 1][j] + c[i - 1][j - 1]) % mod;
        }
    }
}
```

这样，我们在 $O(nm)$ 的时间内预处理所有的组合数 $C_x^y$，其中 $x \in [0,n],y \in [0,m]$。

## 概率初步

### 离散型随机变量

在概率论中，我们把一个随机实验的某种可能结果称为一个**样本**，把所有可能结果构成的集合称为**样本空间**。在一个给定的样本空间中，我们把若干个样本构成的集合，即样本空间的子集，称为**随机事件**。

我们把将样本映射为实数的函数称为**随机变量**。当随机变量的取值有限或可数时，我们称该随机变量为**离散型随机变量**，反之当随机变量的取值不可数时，我们称该随机变量为**连续型随机变量**。

在信息学竞赛中，我们主要需要讨论的是离散型随机变量。

### 概率的定义

设样本空间为 $Ω$，如果对于 $Ω$ 中的每一个随机事件 $A$，都存在实值函数 $P(A)$，满足：

(1) $P(A) \ge 0$。

(2) $P(Ω) = 1$。

(3) 对于若干个两两互斥事件 $A_i$，有 $\sum P(A_i) = P(\cup A_i)$，其中 $\cup$ 表示并集。

则称 $P(A)$ 为随机事件 $A$ 发生的概率。通俗来说，概率就是对随机事件发生可能性的度量，是一个 $0→1$ 之间的实数。

![](https://cdn.luogu.com.cn/upload/image_hosting/kbkddpi9.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/68hbeumo.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/0a2xr6q3.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/hx0jsw0a.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/mzuc2bod.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/1kxogkgf.png)

![](https://cdn.luogu.com.cn/upload/image_hosting/hlp8gkuq.png)